var startUrl = 'http://wptest.loc/test/test.html';
var casper = require('casper').create(/*{verbose: true, logLevel: 'debug'}*/);
var utils = require('utils');

var data = [];

var crawler = {
    pendingUrls: [],
    visitedUrls: []
};

crawler.crawl = function (startUrl) {
    this.fetchPendingUrls(startUrl);
    casper.then(function(){
        crawler.logUrls();
        crawler.crawlPendingUrls();
    });

    this.crawlPendingUrls();

    casper.then(function () { 
        utils.dump(data);
    });
};

crawler.crawlPendingUrls = function(){
    if (crawler.pendingUrls.length > 0) {
        var url = crawler.pendingUrls.shift();
        crawler.scrapPage(url);
        casper.then(crawler.crawlPendingUrls);
    }
};

crawler.logUrls = function(){
    console.log('Found urls for scrapping:');
    utils.dump(crawler.pendingUrls);
};

crawler.fetchPendingUrls = function(startUrl){
    this.openPage(startUrl);
    casper.then(function () {
        var links = this.evaluate(crawler.getLinks),
            baseUrl = crawler.baseUri();

        crawler.pendingUrls = crawler.getAbsoluteUrls(baseUrl, links);
    });
};

crawler.openPage = function(url){
    casper.thenOpen(url);
    casper.then(function(){
        crawler.visitedUrls.push(url);
        crawler.showStatus();
    });
};


crawler.scrapPage = function (url) {
    crawler.openPage(url);

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

crawler.getAbsoluteUrls = function (baseUrl, links) {
    var absoluteUrls = [];
    var self = this;
    Array.prototype.forEach.call(links, function (link) {
        var newUrl = self.absoluteUri(baseUrl, link);
        absoluteUrls.push(newUrl);
    });

    return absoluteUrls;
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