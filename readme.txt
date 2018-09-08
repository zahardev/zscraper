ZScraper is the CasperJS boilerplate, which gives opportunity to fetch data from different resources.
It goes to the main url which you specified, gets links by selector you specified and crawls by them,
fetching all data you need.
You can check how it works by sending it to the public/test directory:
it will go to the index.html, then find 1.html and 2.html links and fetch data from them.
Feel free to fork it and create amazing scraper :)


It requires CasperJS and PhantomJS libraries.

Install PhantomJS

Before installing PhantomJS, you will need to install some required packages on your system. You can install all of them with the following command:

sudo apt-get install build-essential chrpath libssl-dev libxft-dev libfreetype6-dev libfreetype6 libfontconfig1-dev libfontconfig1 -y

Next, you will need to download the PhantomJS. You can download the latest stable version of the PhantomJS from their official website. Run the following command to download PhantomJS:

sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2

Once the download is complete, extract the downloaded archive file to desired system location:

sudo tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share/

Next, create a symlink of PhantomJS binary file to systems bin dirctory:

sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/

Install CasperJS
sudo npm install -g casperjs
