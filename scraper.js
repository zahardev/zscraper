// Set the start URL
var startUrl = 'http://wptest.loc/test/test.html';

// Create instances
var casper = require('casper').create(/*{verbose: true, logLevel: 'debug'}*/);
var utils = require('utils');

var data = [];

var crawler = {
    pendingUrls: [],
    visitedUrls: []
};

crawler.crawl = function (url) {
    this.openPage(url);
    casper.then(function () {
        var links = this.evaluate(crawler.getLinks),
            baseUrl = crawler.baseUri();

        crawler.getPendingUrls(baseUrl, links);

        // If there are URLs to be processed
        if (crawler.pendingUrls.length > 0) {
            casper.echo('Found urls for scrapping:');
            utils.dump(crawler.pendingUrls);
            var nextUrl = crawler.pendingUrls.shift();
            crawler.scrapPage(nextUrl);
        }
    });

    casper.then(function () {
        utils.dump(data);
    });
};

crawler.openPage = function(url){
    casper.open(url);
    crawler.visitedUrls.push(url);
    this.showStatus();
};

crawler.fetchLinks = function(url){

};

crawler.scrapPage = function (url) {
    casper.open(url);
    casper.then(function(){
        this.click('#hidden-link');
    });
    casper.then(function () {
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

    crawler.pendingUrls = pendingUrls;
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