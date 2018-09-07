// Set the start URL
var startUrl = 'http://wptest.loc/test/test.html';

// Create instances
var casper = require('casper').create(/*{verbose: true, logLevel: 'debug'}*/);
var utils = require('utils');

var data = [];

var crawler = {};

// crawler from the given URL
crawler.crawl = function (url) {
    var self = this;
    // Open the URL
    casper.open(url);
    casper.then(function () {
        self.showStatus();

        var links = this.evaluate(self.getLinks),
            baseUrl = crawler.baseUri(),
            pendingUrls = crawler.getPendingUrls(baseUrl, links),
            visitedUrls = [];

        // If there are URLs to be processed
        if (pendingUrls.length > 0) {
            var nextUrl = pendingUrls.shift();
            crawler.scrapPage(nextUrl);
            visitedUrls.push(url);
        }
    });

    casper.then(function () {
        utils.dump(data);
    });
};

crawler.fetchLinks = function(url){

};

crawler.scrapPage = function (url) {
    casper.open(url);
    casper.then(function(){
        this.click('#hidden-link');
    });
    casper.then(function () {
        crawler.showStatus();
        var pageData = {};

        pageData.content = this.evaluate(function () {
            return document.querySelector("#content").innerText;
        });

        pageData.title = this.evaluate(function () {
            return document.querySelector('h1').innerText;
        });

        pageData.hiddenData = this.evaluate(function () {
            return document.querySelector('#hidden-link').innerText;
        });

        data.push(pageData);
    });
};

crawler.getPendingUrls = function (baseUrl, links) {
    var pendingUrls = [];
    var self = this;
    Array.prototype.forEach.call(links, function (link) {
        var newUrl = self.absoluteUri(baseUrl, link);
        pendingUrls.push(newUrl);
    });

    casper.echo('Found urls for scrapping:');
    utils.dump(pendingUrls);

    return pendingUrls;
};

crawler.getLinks = function () {
    var links = [];
    Array.prototype.forEach.call(__utils__.findAll('a'), function (e) {
        links.push(e.getAttribute('href'));
    });
    return links;
};

crawler.baseUri = function () {
    var location = casper.getGlobal('location');
    return location.origin + location.pathname.substring(0, location.pathname.lastIndexOf('/'));
};

crawler.absoluteUri = function (baseUri, link) {
    if (-1 === link.indexOf('http')) {
        link = baseUri + '/' + link;
    }
    return link;
};

crawler.showStatus = function () {
    // Set the status style based on server status code
    var status = casper.status().currentHTTPStatus;
    switch (status) {
        case 200:
            var statusStyle = {fg: 'green', bold: true};
            break;
        case 404:
            var statusStyle = {fg: 'red', bold: true};
            break;
        default:
            var statusStyle = {fg: 'magenta', bold: true};
            break;
    }

    // Display the crawlered URL and status
    casper.echo(casper.colorizer.format(status, statusStyle) + ' ' + casper.getCurrentUrl());
};

// Start crawlering
casper.start(startUrl, function () {
    crawler.crawl(startUrl);
});

// Start the run
casper.run();