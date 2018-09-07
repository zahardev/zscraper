/**
 * IDE Helper for CasperJS
 * Author: Christopher Sax
 * Date: 31 October 2016
 */

/**
 * Casper ships with a tester module and a Tester class providing an API for unit & functional testing purpose. By default you can access an instance of this class through the test property of any Casper class instance.
 */
var test = {
    /**
     * Asserts that the provided condition strictly resolves to a boolean true
     * @param {bool} condition
     * @param {String} message (optional)
     * @returns boolean
     */
    assert: function (condition, message) {},
    /**
     * Asserts that an element matching the provided selector expression doesn’t exists within the remote DOM environment.
     * @param {String} selector
     * @param  {String} message (optional)
     * @returns {undefined}
     */
    assertDoesntExist: function (selector, message) {},
    /**
     * Asserts that two values are strictly equivalent:
     * @param {mixed} testValue
     * @param {mixed} expected
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertEquals: function (testValue, expected, message) {},
    /**
     * Asserts that a code evaluation in remote DOM strictly resolves to a boolean true:
     * @param {Function} fn
     * @param {String} message (optional)
     * @param {mixed} arguments (optional)
     * @returns {undefined}
     */
    assertEval: function (fn, message, arguments) {},
    /**
     * Asserts that the result of a code evaluation in remote DOM strictly equals to the expected value
     * @param {Function} fn
     * @param {mixed} expected
     * @param {String} message (optional)
     * @param {mixed} arguments (optional)
     * @returns {undefined}
     */
    assertEvalEquals: function (fn, expected, message, arguments) {},
    /**
     * Asserts that a selector expression matches a given number of elements:
     * @param {String} selector
     * @param {int} count
     * @param {String} message
     * @returns {undefined}
     */
    assertElementCount: function (selector, count, message) {},
    /**
     * Asserts that an element matching the provided selector expression exists in remote DOM environment
     * @param {String} selector
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertExists: function (selector, message) {},
    /**
     * Asserts that a given subject is falsy.
     * @param {mixed} subjects
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertFalsy: function (subjects, message) {},
    /**
     * Asserts that a given form field has the provided value with input name or selector expression
     * @param {String|object} input
     * @param {String} expected
     * @param {String} message (optional)
     * @param {object} options (optional)
     * @returns {undefined}
     */
    assertField: function (input, expected, message, options) {},
    /**
     * Asserts that a given form field has the provided value:
     * @param {String} inputName
     * @param {String} expected
     * @param {String} message (optional)
     * @param {object} options (optional)
     * @returns {undefined}
     */
    assertFieldName: function (inputName, expected, message, options) {},
    /**
     * Asserts that a given form field has the provided value given a CSS selector
     * @param {String} cssSelector
     * @param {String} expected
     * @param {String} message
     * @returns {undefined}
     */
    assertFieldCSS: function (cssSelector, expected, message) {},
    /**
     * Asserts that a given form field has the provided value given a XPath selector
     * @param {String} xpathSelector
     * @param {String} expected
     * @param {String} message
     * @returns {undefined}
     */
    assertFieldXPath: function (xpathSelector, expected, message) {},
    /**
     * Asserts that current HTTP status code is the same as the one passed as argument
     * @param {int} status
     * @param {String} message
     * @returns {undefined}
     */
    assertHttpStatus: function (status, message) {},
    /**
     * Asserts that a provided {String} matches a provided javascript RegExp pattern
     * @param {mixed} subject
     * @param {RegExp} pattern
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertMatch: function (subject, pattern, message) {},
    /**
     * Asserts that the passed subject resolves to some falsy value
     * @param {mixed} subject
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertNot: function (subject, message) {},
    /**
     * Asserts that two values are not strictly equals
     * @param {mixed} testValue
     * @param {mixed} expected
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertNotEquals: function (testValue, expected, message) {},
    /**
     * Asserts that the element matching the provided selector expression is not visible
     * @param {String} selector
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertNotVisible: function (selector, message) {},
    /**
     * Asserts that the provided function called with the given parameters raises a javascript Error
     * @param {Function} fn
     * @param {Array} args
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertRaises: function (fn, args, message) {},
    /**
     * Asserts that given text does not exist in all the elements matching the provided selector expression:
     * @param {String} selector
     * @param {String} text
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertSelectorDoesntHaveText: function (selector, text, message) {},
    /**
     * Asserts that given text exists in elements matching the provided selector expression:
     * @param {String} selector
     * @param {String} text
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertSelectorHasText: function (selector, text, message) {},
    /**
     * The testFx function is executed against all loaded assets and the test passes when at least one resource matches:
     * @param {Function} testFx
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertResourceExists: function (testFx, message) {},
    /**
     * Asserts that body plain text content contains the given String:
     * @param {String} expected
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertTextExists: function (expected, message) {},
    /**
     * Asserts that body plain text content doesn’t contain the given String:
     * @param {String} unexpected
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertTextDoesntExist: function (unexpected, message) {},
    /**
     * Asserts that title of the remote page equals to the expected one:
     * @param {String} expected
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertTitle: function (expected, message) {},
    /**
     * Asserts that title of the remote page matches the provided RegExp pattern:
     * @param {String} pattern
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertTitleMatch: function (pattern, message) {},
    /**
     * Asserts that a given subject is truthy.
     * @param {mixed} subject
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertTruthy: function (subject, message) {},
    /**
     * Asserts that the provided input is of the given type:
     * @param {mixed} input
     * @param {String} type
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertType: function (input, type, message) {},
    /**
     * Asserts that the provided input is of the given constructor:
     * @param {mixed} input
     * @param {Function} constructor
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertInstanceOf: function (input, constructor, message) {},
    /**
     * 
     * @param {RegExp} pattern
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertUrlMatch: function (pattern, message) {},
    /**
     * Asserts that at least one element matching the provided selector expression is visible:
     * @param {String} selector
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertVisible: function (selector, message) {},
    /**
     * Asserts that all elements matching the provided selector expression are visible:
     * @param {String} selector
     * @param {String} message (optional)
     * @returns {undefined}
     */
    assertAllVisible: function (selector, message) {},
    /**
     * Starts a suite of <planned> tests (if defined). The suite callback will get the current Tester instance as its first argument:
     * @param {String} description
     * @param {int} planned
     * @param {Function} suite
     * @returns {undefined}
     */
    begin: function (description, planned, suite) {},
    /**
     * Render a colorized output. Basically a proxy method for Casper.Colorizer#colorize().
     * @param {String} message
     * @param {String} style
     * @returns {undefined}
     */
    colorize: function (message, style) {},
    /**
     * Writes a comment-style formatted message to stdout:
     * @param {String} message
     * @returns {undefined}
     */
    comment: function (message) {},
    /**
     * Flag a test suite started with begin() as processed:
     * @returns {undefined}
     */
    done: function () {},
    /**
     * Writes an error-style formatted message to stdout:
     * @param {String} message
     * @returns {undefined}
     */
    error: function (message) {},
    /**
     * Adds a failed test entry to the stack:
     * @param {String} message
     * @param {Object}  option
     * @returns {undefined}
     */
    fail: function (message, option) {},
    /**
     * Formats a message to highlight some parts of it. Only used internally by the tester.
     * @param {String} message
     * @param {String} style
     * @returns {undefined}
     */
    formatMessage: function (message, style) {},
    /**
     * Retrieves failures for current test suite:
     * @returns {undefined}
     */
    getFailures: function () {},
    /**
     * Retrieves a report for successful test cases in the current test suite:
     * @returns {undefined}
     */
    getPasses: function () {},
    /**
     * Writes an info-style formatted message to stdout:
     * @param {String} message
     * @returns {undefined}
     */
    info: function (message) {},
    /**
     * Adds a successful test entry to the stack:
     * @param {String} message
     * @returns {undefined}
     */
    pass: function (message) {},
    /**
     * Render test results, save results in an XUnit formatted file, and optionally exits phantomjs:
     * @param {bool} exit
     * @param {int} status
     * @param {String} save
     * @returns {undefined}
     */
    renderResults: function (exit, status, save) {},
    /**
     * Defines a function which will be executed before every test defined using begin():
     * @param {Function} fn (optional)
     * @returns {undefined}
     */
    setUp: function (fn) {},
    /**
     * Skips a given number of planned tests:
     * @param {int} nb
     * @param {String} message
     * @returns {undefined}
     */
    skip: function (nb, message) {},
    /**
     * Defines a function which will be executed after every test defined using begin():
     * @param {Function} fn (optional)
     * @returns {undefined}
     */
    tearDown: function (fn) {}
};

var casper = {
    /**
     * Moves back a step in browser’s history:
     * @memberOf casper
     * @class casper
     * @namespace casper
     */
    back: function () {},
    /**
     * Encodes a resource using the base64 algorithm synchronously using
     * client-side XMLHttpRequest.
     * @param {String} url 
     * @param {String} method (optional)
     * @param {Object} data (optional)
     */
    base64encode: function (url, method, data) {},
    /**
     * Bypasses a given number of defined navigation steps:
     * @param {Number} nb
     */
    bypass: function (nb) {},
    /**
     * Performs a click on the element matching the provided selector expression. The method tries two strategies sequentially:
     * @param {String} selector
     * @param {Number|String} X (optional)
     * @param {Number|String} Y (optional)
     */
    click: function (selector, X, Y) {},
    /**
     * Performs a click on the element matching the provided selector expression. The method tries two strategies sequentially:
     * 1.trying to trigger a MouseEvent in Javascript
     * 2. using native QtWebKit event if the previous attempt failed
     * @param {String} label
     * @param {String} tag (optional)
     */
    clickLabel: function (label, tag) {},
    /**
     * Proxy method for PhantomJS’ WebPage#render. Adds a clipRect parameter for automatically setting page clipRect setting and reverts it back once done:
     * @param {String} targetFilepath
     * @param {Object} clipRect (optional)
     * @param {Object} imgOptions (optional)
     */
    capture: function (targetFilepath, clipRect, imgOptions) {},
    /**
     * Proxy method for PhantomJS’ WebPage#render. Adds a clipRect parameter for automatically setting page clipRect setting and reverts it back once done:
     * @param {String} format
     * @param {mixed} area (optional)
     */
    captureBase64: function (format, area) {},
    /**
     * Captures the page area containing the provided selector and saves it to targetFile:
     * @param {String} targetFile
     * @param {String} selector 
     * @param {Object} imgOptions (optional)
     */
    captureSelector: function (targetFile, selector, imgOptions) {},
    /**
     * Clears the current page execution environment context. Useful to avoid having previously loaded DOM contents being still active.
     */
    clear: function () {},
    /**
     * Outputs the results of getHTML() directly to the console. It takes the same arguments as getHTML().
     * @param {String} selector (optional)
     * @param {bool} outer (optional)
     */
    debugHTML: function (selector, outer) {},
    /**
     * Logs the textual contents of the current page directly to the standard output, for debugging purpose:
     */
    debugPage: function () {},
    /**
     * Exits phantom with a logged error message and an optional exit status code:
     * @param {String} message
     * @param {int} status
     */
    die: function (message, status) {},
    /**
     * Saves a remote resource onto the filesystem. You can optionally set the HTTP method using the method argument, and pass request arguments through the data object (see base64encode()):
     * @param {String} url
     * @param {String} target
     * @param {String} method (optional)
     * @param {Object}  data (optional)
     */
    download: function (url, target, method, data) {},
    /**
     * Iterates over provided array items and execute a callback:
     * @param {Array} array
     * @param {Function} fn
     */
    each: function (array, fn) {},
    /**
     * Iterates over provided array items and adds a step to the stack with current data attached to it:
     * @param {Array} array
     * @param {Function} then
     */
    eachThen: function (array, then) {},
    /**
     * Prints something to stdout, optionally with some fancy color (see the colorizer module for more information):
     * @param {String} message
     * @param {String} style (optional)
     * @this casper
     */
    echo: function (message, style) {},
    /**
     * Basically PhantomJS’ WebPage#evaluate equivalent. Evaluates an expression in the current page DOM context: (can take infinite
     * amount of arguments after function
     * @param {Function} fn
     * @param  arg1 (optional)
     * @param  arg2 (optional)
     */
    evaluate: function(fn, arg1, arg2){},
    /**
     * Evaluates an expression within the current page DOM and die() if it returns anything but true:
     * @param {Function} fn
     * @param {String} message (optional)
     * @param {int} status (optional)
     */
    evaluateOrDie: function(fn, message, status){},
    /**
     * Exits PhantomJS with an optional exit status code.
     * @param {int} status (optional)
     */
    exit: function(status){},
    /**
     * Checks if any element within remote DOM matches the provided selector:
     * @param {String} selector
     */
    exists: function(selector){},
    /**
     * Retrieves text contents matching a given selector expression. If you provide one matching more than one element, their textual contents will be concatenated:
     * @param {String} selector
     */
    fetchText: function(selector){},
    /**
     * Moves a step forward in browser’s history:
     */
    forward: function(){},
    /**
     * Logs a message with an optional level in an optional space. Available levels are debug, info, warning and error. A space is a kind of namespace you can set for filtering your logs. By default, Casper logs messages in two distinct spaces: phantom and remote, to distinguish what happens in the PhantomJS environment from the remote one:
     * @param {String} message
     * @param {String} level (optional)
     * @param {String} space (optional)
     */
    log: function(message, level, space){},
    /**
     * Fills the fields of a form with given values and optionally submits it. Fields
     are referenced by their name attribute.
     * @param {String} selector
     * @param {Object}  values
     * @param {bool} submit (optional)
     */
    fill: function(selector, values, submit){},
    /**
     * 
     * @param {String} selector
     * @param {Object}  values
     * @param {bool} submit (optional)
     */
    fillSelectors: function(selector, values, submit){},
    /**
     * Fills form fields with given values and optionally submits it. Fields are referenced by CSS3 selectors:
     * @param {String} selector
     * @param {Object}  values
     * @param {bool} submit (optional)
     */
    fillLabels: function(selector, values, submit){},
    /**
     * Fills form fields with given values and optionally submits it. While the form element is always referenced by a CSS3 selector, fields are referenced by XPath selectors:
     * @param {String} selector
     * @param {Object}  values
     * @param {bool} submit (optional)
     */
    fillXPath: function(selector, values, submit){},
    /**
     * Retrieves current page URL. Note that the url will be url-decoded:
     */
    getCurrentUrl: function(){},
    /**
     * Retrieves the value of an attribute on the first element matching the provided selector:
     * @param {String} selector
     * @param {String} attribute
     */
    getElementAttribute: function(selector, attribute){},
    /**
     * Retrieves the values of an attribute on each element matching the provided selector:
     * @param {String} selector
     * @param {String} attribute
     */
    getElementsAttribute: function(selector, attribute){},
    /**
     * Retrieves boundaries for a DOM element matching the provided selector.
     * @param {String} selector
     */
    getElementBounds: function(selector){},
    /**
     * Retrieves a list of boundaries for all DOM elements matching the provided selector.
     * It returns an array of objects with four keys: top, left, width and height (see getElementBounds()).
     * @param {String} selector
     */
    getElementsBounds: function(selector){},
    /**
     * Retrieves information about the first element matching the provided selector:
     * @param {String} selector  
     */
    getElementInfo: function(selector){},
    /**
     * Retrieves information about all elements matching the provided selector:
     * @param {String} selector
     */
    getElementsInfo: function(selector){},
    /**
     * Retrieves a given form all of its field values:
     * @param {String} selector
     */
    getFormValues: function(selector){},
    /**
     * Retrieves a global variable value within the remote DOM environment by its name. Basically, getGlobal('foo') will retrieve the value of window.foo from the page:
     * @param {String} name
     */
    getGlobal: function(name){},
    /**
     * Retrieves HTML code from the current page. By default, it outputs the whole page HTML contents:
     * @param {String} selector (optional)
     * @param {bool} outer (optional)
     */
    getHTML: function(selector, outer){},
    /**
     * Retrieves current page contents, dealing with exotic other content types than HTML:
     */
    getPageContent: function(){},
    /**
     * Retrieves current page title:
     */
    getTitle: function(){},
    /**
     * Triggers a mouse event on the first element found matching the provided selector.
     * @param {String} type
     * @param {String} selector
     * @param {Number|String} X
     * @param {Number|String} Y
     */
    mouseEvent: function(type, selector, X, Y){},
    /**
     * Creates a new WebPage instance:
     */
    newPage: function(){},
    /**
     * Performs an HTTP request for opening a given location. You can forge GET, POST, PUT, DELETE and HEAD requests.
     * @param {String} location
     * @param {Object}  Settings
     */
    open: function(location, Settings){},
    /**
     * Reloads current page location:
     * @param {Function} then (optional)
     */
    reload: function(then){},
    /**
     * Repeats a navigation step a given number of times:
     * @param {int} times
     * @param {Function} then
     */
    repeat: function(times, then){},
    /**
     * Checks if a resource has been loaded. You can pass either a function, a {String} or a RegExp instance to perform the test:
     * @param {String|Function|RegExp} test
     */
    resourceExists: function(test){},
    /**
     * Runs the whole suite of steps and optionally executes a callback when they’ve all been done. Obviously, calling this method is mandatory in order to run the Casper navigation suite.
     * @param {Function} onComplete
     * @param {int} time (optional)
     */
    run: function(onComplete, time){},
    /**
     * 
     * @param {int} x
     * @param {int} y
     */
    scrollTo: function(x, y){},
    /**
     * Scrolls current document to the coordinates defined by the value of x and y:
     */
    scrollToBottom: function(){},
    /**
     * Scrolls current document to its bottom:
     * @param {Selector} selector
     * @param {String} keys
     * @param {Object}  options (optional)
     */
    sendKeys: function(selector, keys, options){},
    /**
     * Sets HTTP_AUTH_USER and HTTP_AUTH_PW values for HTTP based authentication systems:
     * @param {String} username
     * @param {String} password
     */
    setHttpAuth: function(username, password){},
    /**
     * Configures and starts Casper, then opens the provided url and optionally adds the step provided by the then argument:
     * @param {String} url
     * @param {Function} then (optional)
     */
    start: function(url, then){},
    /**
     * Returns the status of current Casper instance:
     * @param {bool} asString
     */
    status: function(asString){},
    
    test: {
        /**
         * Asserts that the provided condition strictly resolves to a boolean true
         * @param {bool} condition
         * @param {String} message (optional)
         * @returns boolean
         */
        assert: function (condition, message) {},
        /**
         * Asserts that an element matching the provided selector expression doesn’t exists within the remote DOM environment.
         * @param {String} selector
         * @param  {String} message (optional)
         * @returns {undefined}
         */
        assertDoesntExist: function (selector, message) {},
        /**
         * Asserts that two values are strictly equivalent:
         * @param {mixed} testValue
         * @param {mixed} expected
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertEquals: function (testValue, expected, message) {},
        /**
         * Asserts that a code evaluation in remote DOM strictly resolves to a boolean true:
         * @param {Function} fn
         * @param {String} message (optional)
         * @param {mixed} arguments (optional)
         * @returns {undefined}
         */
        assertEval: function (fn, message, arguments) {},
        /**
         * Asserts that the result of a code evaluation in remote DOM strictly equals to the expected value
         * @param {Function} fn
         * @param {mixed} expected
         * @param {String} message (optional)
         * @param {mixed} arguments (optional)
         * @returns {undefined}
         */
        assertEvalEquals: function (fn, expected, message, arguments) {},
        /**
         * Asserts that a selector expression matches a given number of elements:
         * @param {String} selector
         * @param {int} count
         * @param {String} message
         * @returns {undefined}
         */
        assertElementCount: function (selector, count, message) {},
        /**
         * Asserts that an element matching the provided selector expression exists in remote DOM environment
         * @param {String} selector
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertExists: function (selector, message) {},
        /**
         * Asserts that a given subject is falsy.
         * @param {mixed} subjects
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertFalsy: function (subjects, message) {},
        /**
         * Asserts that a given form field has the provided value with input name or selector expression
         * @param {String|Object} input
         * @param {String} expected
         * @param {String} message (optional)
         * @param {Object} options (optional)
         * @returns {undefined}
         */
        assertField: function (input, expected, message, options) {},
        /**
         * Asserts that a given form field has the provided value:
         * @param {String} inputName
         * @param {String} expected
         * @param {String} message (optional)
         * @param {Object} options (optional)
         * @returns {undefined}
         */
        assertFieldName: function (inputName, expected, message, options) {},
        /**
         * Asserts that a given form field has the provided value given a CSS selector
         * @param {String} cssSelector
         * @param {String} expected
         * @param {String} message
         * @returns {undefined}
         */
        assertFieldCSS: function (cssSelector, expected, message) {},
        /**
         * Asserts that a given form field has the provided value given a XPath selector
         * @param {String} xpathSelector
         * @param {String} expected
         * @param {String} message
         * @returns {undefined}
         */
        assertFieldXPath: function (xpathSelector, expected, message) {},
        /**
         * Asserts that current HTTP status code is the same as the one passed as argument
         * @param {int} status
         * @param {String} message
         * @returns {undefined}
         */
        assertHttpStatus: function (status, message) {},
        /**
         * Asserts that a provided {String} matches a provided javascript RegExp pattern
         * @param {mixed} subject
         * @param {RegExp} pattern
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertMatch: function (subject, pattern, message) {},
        /**
         * Asserts that the passed subject resolves to some falsy value
         * @param {mixed} subject
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertNot: function (subject, message) {},
        /**
         * Asserts that two values are not strictly equals
         * @param {mixed} testValue
         * @param {mixed} expected
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertNotEquals: function (testValue, expected, message) {},
        /**
         * Asserts that the element matching the provided selector expression is not visible
         * @param {String} selector
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertNotVisible: function (selector, message) {},
        /**
         * Asserts that the provided function called with the given parameters raises a javascript Error
         * @param {Function} fn
         * @param {Array} args
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertRaises: function (fn, args, message) {},
        /**
         * Asserts that given text does not exist in all the elements matching the provided selector expression:
         * @param {String} selector
         * @param {String} text
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertSelectorDoesntHaveText: function (selector, text, message) {},
        /**
         * Asserts that given text exists in elements matching the provided selector expression:
         * @param {String} selector
         * @param {String} text
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertSelectorHasText: function (selector, text, message) {},
        /**
         * The testFx function is executed against all loaded assets and the test passes when at least one resource matches:
         * @param {Function} testFx
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertResourceExists: function (testFx, message) {},
        /**
         * Asserts that body plain text content contains the given String:
         * @param {String} expected
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertTextExists: function (expected, message) {},
        /**
         * Asserts that body plain text content doesn’t contain the given String:
         * @param {String} unexpected
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertTextDoesntExist: function (unexpected, message) {},
        /**
         * Asserts that title of the remote page equals to the expected one:
         * @param {String} expected
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertTitle: function (expected, message) {},
        /**
         * Asserts that title of the remote page matches the provided RegExp pattern:
         * @param {String} pattern
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertTitleMatch: function (pattern, message) {},
        /**
         * Asserts that a given subject is truthy.
         * @param {mixed} subject
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertTruthy: function (subject, message) {},
        /**
         * Asserts that the provided input is of the given type:
         * @param {mixed} input
         * @param {String} type
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertType: function (input, type, message) {},
        /**
         * Asserts that the provided input is of the given constructor:
         * @param {mixed} input
         * @param {Function} constructor
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertInstanceOf: function (input, constructor, message) {},
        /**
         * 
         * @param {RegExp} pattern
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertUrlMatch: function (pattern, message) {},
        /**
         * Asserts that at least one element matching the provided selector expression is visible:
         * @param {String} selector
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertVisible: function (selector, message) {},
        /**
         * Asserts that all elements matching the provided selector expression are visible:
         * @param {String} selector
         * @param {String} message (optional)
         * @returns {undefined}
         */
        assertAllVisible: function (selector, message) {},
        /**
         * Starts a suite of <planned> tests (if defined). The suite callback will get the current Tester instance as its first argument:
         * @param {String} description
         * @param {int} planned
         * @param {Function} suite
         * @returns {undefined}
         */
        begin: function (description, planned, suite) {},
        /**
         * Render a colorized output. Basically a proxy method for Casper.Colorizer#colorize().
         * @param {String} message
         * @param {String} style
         * @returns {undefined}
         */
        colorize: function (message, style) {},
        /**
         * Writes a comment-style formatted message to stdout:
         * @param {String} message
         * @returns {undefined}
         */
        comment: function (message) {},
        /**
         * Flag a test suite started with begin() as processed:
         * @returns {undefined}
         */
        done: function () {},
        /**
         * Writes an error-style formatted message to stdout:
         * @param {String} message
         * @returns {undefined}
         */
        error: function (message) {},
        /**
         * Adds a failed test entry to the stack:
         * @param {String} message
         * @param {Object}  option
         * @returns {undefined}
         */
        fail: function (message, option) {},
        /**
         * Formats a message to highlight some parts of it. Only used internally by the tester.
         * @param {String} message
         * @param {String} style
         * @returns {undefined}
         */
        formatMessage: function (message, style) {},
        /**
         * Retrieves failures for current test suite:
         * @returns {undefined}
         */
        getFailures: function () {},
        /**
         * Retrieves a report for successful test cases in the current test suite:
         * @returns {undefined}
         */
        getPasses: function () {},
        /**
         * Writes an info-style formatted message to stdout:
         * @param {String} message
         * @returns {undefined}
         */
        info: function (message) {},
        /**
         * Adds a successful test entry to the stack:
         * @param {String} message
         * @returns {undefined}
         */
        pass: function (message) {},
        /**
         * Render test results, save results in an XUnit formatted file, and optionally exits phantomjs:
         * @param {bool} exit
         * @param {int} status
         * @param {String} save
         * @returns {undefined}
         */
        renderResults: function (exit, status, save) {},
        /**
         * Defines a function which will be executed before every test defined using begin():
         * @param {Function} fn (optional)
         * @returns {undefined}
         */
        setUp: function (fn) {},
        /**
         * Skips a given number of planned tests:
         * @param {int} nb
         * @param {String} message
         * @returns {undefined}
         */
        skip: function (nb, message) {},
        /**
         * Defines a function which will be executed after every test defined using begin():
         * @param {Function} fn (optional)
         * @returns {undefined}
         */
        tearDown: function (fn) {}
    },
    /**
     * This method is the standard way to add a new navigation step to the stack, by providing a simple function:
     * @param {Function} then
     */
    then: function(then){},
    /**
     * Adds a navigation step which will bypass a given number of following steps:
     * @param {int} nb
     */
    thenBypass: function(nb){},
    /**
     * Bypass a given number of navigation steps if the provided condition is truthy or is a function that returns a truthy value:
     * @param {Mixed} condition
     * @param {int} nb
     */
    thenBypassIf: function(condition, nb){},
    /**
     * Opposite of thenByPassIf()
     * @param {Mixed} condition
     * @param {int} nb
     */
    thenBypassUnless: function(condition, nb){},
    /**
     * Adds a new navigation step to click a given selector and optionally add a new navigation step in a single operation:
     * @param {String} selector
     * @param {Function} then
     */
    thenClick: function(selector, then){},
    /**
     * Adds a new navigation step to perform code evaluation within the current retrieved page DOM:
     * @param {Function} fn
     * @param  arg1 (optional)
     * @param  arg2 (optional)
     */
    thenEvaluate: function(fn, arg1, arg2){},
    /**
     * Adds a new navigation step for opening a new location, and optionally add a next step when its loaded:
     * @param {String} location
     * @param {mixed} options (optional)
     */
    thenOpen: function(location, options){},
    /**
     * Basically a shortcut for opening an url and evaluate code against remote DOM environment:
     * @param {String} location
     * @param {Function} then
     * @param  arg1 (optional)
     * @param  arg2 (optional)
     */
    thenOpenAndEvaluate: function(location, then, arg1, arg2){},
    /**
     * Returns a {String} representation of current Casper instance:
     */
    toString: function(){},
    /**
     * Abort all current waiting processes, if any.
     */
    unwait: function(){},
    /**
     * Sets the User-Agent {String} to send through headers when performing requests:
     * @param {String} agent
     */
    userAgent: function(agent){},
    /**
     * Changes current viewport size:
     * @param {int} width
     * @param {int} height
     * @param {Function} then (optional)
     */
    viewport: function(width, height, then){},
    /**
     * Checks if the DOM element matching the provided selector expression is visible in remote page:
     * @param {String} selector
     */
    visible: function(selector){},
    /**
     * Pause steps suite execution for a given amount of time, and optionally execute a step on done:
     * @param {int} timeout
     * @param {Function} then (optional)
     */
    wait: function(timeout, then){},
    /**
     * Waits until a function returns true to process any next step.
     * @param {Function} testFx
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     * @param {Object}  details (optional)
     */
    waitFor: function(testFx, then, onTimeout, timeout, details){},
    /**
     * Waits until a JavaScript alert is triggered. The step function will be passed the alert message in the response.data property:
     * @param {Function} then
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitForAlert: function(then, onTimeout, timeout){},
    /**
     * Waits for a popup having its url matching the provided pattern to be opened and loaded.
     * @param {String|RegExp} urlPattern
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitForPopup: function(urlPattern, then, onTimeout, timeout){},
    /**
     * Wait until a resource that matches a resource matching constraints defined by testFx are satisfied to process a next step.
     * @param {String|Function|RegExp} testFx
     * @param {Function} then
     * @param {Function} onTimeout
     * @param {int} timeout
     */
    waitForResource: function(testFx, then, onTimeout, timeout){},
    /**
     * Waits for the current page url to match the provided argument (String or RegExp):
     * @param {String|RegExp} url
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitForUrl: function(url, then, onTimeout, timeout){},
    /**
     * Waits until an element matching the provided selector expression exists in remote DOM to process any next step. Uses waitFor():
     * @param {String} selector
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitForSelector: function(selector, then, onTimeout, timeout){},
    /**
     * Waits until an element matching the provided selector expression does not exist in remote DOM to process a next step. Uses waitFor():
     * @param {String} selector
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitWhileSelector: function(selector, then, onTimeout, timeout){},
    /**
     * Waits until the text on an element matching the provided selector expression
     is changed to a different value before processing the next step. Uses waitFor():
     * @param {String} selectors
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitForSelectorTextChange: function(selectors, then, onTimeout, timeout){},
    /**
     * Waits until the passed text is present in the page contents before processing the immediate next step. Uses waitFor():
     * @param {String} text
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitForText: function(text, then, onTimeout, timeout){},
    /**
     * Waits until an element matching the provided selector expression is visible in the remote DOM to process a next step. Uses waitFor().
     * @param {String} selector
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitUntilVisible: function(selector, then, onTimeout, timeout){},
    /**
     * Waits until an element matching the provided selector expression is no longer visible in remote DOM to process a next step. Uses waitFor():
     * @param {String} selector
     * @param {Function} then (optional)
     * @param {Function} onTimeout (optional)
     * @param {int} timeout (optional)
     */
    waitWhileVisible: function (selector, then, onTimeout, timeout) {},
    /**
     * Logs and prints a warning message to the standard output:
     * @param {String} message
     */
    warn: function (message) {},
    /**
     * Switches the main page to the frame having the name or frame index number matching the passed argument, and processes a step.
     * @param {String|Number} frameInfo
     * @param {Function} then
     */
    withFrame: function (frameInfo, then) {},
    /**
     * Switches the main page to a popup matching the information passed as argument, and processes a step. The page context switch only lasts until the step execution is finished:
     * @param {Mixed} popupInfo
     * @param {Function} then
     */
    withPopup: function (popupInfo, then) {},
    /**
     * Sets the current page zoom factor:
     * @param {int} factor
     */
    zoom: function (factor) {}
};

/**
 * Casper ships with a few client-side utilities which are injected in the remote DOM environment, and accessible from there through the __utils__ object instance of the ClientUtils class from the clientutils module:
 */
var __utils__ = {
    /**
    * Print a message out to the casper console from the remote page DOM environment:
    * @param {String} message
    */
   echo: function(message){},
   /**
    * Encodes a {String} using the base64 algorithm. For the records, CasperJS doesn’t use builtin window.btoa() function because it can’t deal efficiently with Strings encoded using >8b characters:
    * @param {String} contents
    */
   encode: function(contents){},
   /**
    * Checks if a DOM element matching a given selector expression exists:
    * @param {String} selector
    */
   exists: function(selector){},
   /**
    * Retrieves all DOM elements matching a given selector expression:
    * @param {String} selector
    */
   findAll: function(selector){},
   /**
    * Retrieves a single DOM element by a selector expression:
    * @param {String} selector
    */
   findOne: function(selector){},
   /**
    * Force the engine to use another target instead of the one provided. Very useful to limit the number of open windows and reduce memory consumption:
    * @param {String} selector
    * @param {String} target
    */
   forceTarget: function(selector, target){},
   /**
    * This method will retrieved a base64 encoded version of any resource behind a url. For example, let’s imagine we want to retrieve the base64 representation of some website’s logo:
    * @param {String} url
    * @param {String} method (optional)
    * @param {Object}  data (optional)
    */
   getBase64: function(url, method, data){},
   /**
    * This method will retrieved the raw contents of a given binary resource; unfortunately though, PhantomJS cannot process these data directly so you’ll have to process them within the remote DOM environment. If you intend to download the resource, use getBase64() or Casper.base64encode() instead:
    * @param {String} url
    * @param {String} method (optional)
    * @param {Object}  data (optional)
    */
   getBinary: function(url, method, data){},
   /**
    * Retrieves current document height:
    */
   getDocumentHeight: function(){},
   /**
    * Retrieves current document width:
    */
   getDocumentWidth: function(){},
   /**
    * Retrieves boundaries for a DOM elements matching the provided selector.
    * @param {String} selector
    */
   getElementBounds: function(selector){},
   /**
    * Retrieves boundaries for all DOM element matching the provided selector.
    * @param {String} selector
    */
   getElementsBounds: function(selector){},
   /**
    * Retrieves a single DOM element matching a given XPath expression.
    * @param {String} expression 
    * @param {HTMLElement} scope (optional)
    */
   getElementByXPath: function(expression, scope){},
   /**
    * Retrieves all DOM elements matching a given XPath expression, if any.
    * @param {String} expression 
    * @param {HTMLElement} scope (optional)
    */
   getElementsByXPath: function(expression, scope){},
   /**
    * Retrieves the value from the field named against the inputNamed argument:
    * @param {String} selector
    * @param {HTMLElement} scope (optional)
    */
   getFieldValue: function(selector, scope){},
   /**
    * Retrieves the value from the field named against the inputNamed argument:
    * @param {String} selector
    */
   getFormValues: function(selector){},
   /**
    * Logs a message with an optional level. Will format the message a way CasperJS will be able to log phantomjs side. Default level is debug:
    * @param {String} message
    * @param {String} level (optional)
    */
   log: function(message, level){},
   /**
    * Makes selector by defined type XPath, Name or Label. {Function} has same result as selectXPath in Casper module for XPath type - it makes XPath object. {Function} also accepts name attribute of the form field or can select element by its label text.
    * @param {String} selector 
    * @param {String} type (optional)
    */
   makeSelector: function(selector, type){},
   /**
    * Dispatches a mouse event to the DOM element behind the provided selector.
    * @param {String} type
    * @param {String} selector
    * @param {Number|String} X (optional)
    * @param {Number|String} Y (optional)
    */
   mouseEvent: function(type, selector, X, Y){},
   /**
    * Removes all DOM elements matching a given XPath expression.
    * @param {String} expression 
    */
   removeElementsByXPath: function(expression){},
   /**
    * Sends an AJAX request, using the following parameters:
    * @param {String} url The url to request.
    * @param {String} method The HTTP method (default: GET). (optional)
    * @param {Object}  data Request parameters (default: null). (optional)
    * @param {bool} async Flag for an asynchroneous request? (default: false) (optional)
    * @param {Object}  settings Other settings when perform the AJAX request (default: null) (optional)
    */
   sendAJAX: function(url, method, data, async, settings){},
   /**
    * Sets a value to form field by CSS3 or XPath selector. With makeSelector() function can be easily used with name or label selector
    * @param {String|Object} selector
    * @param {Mixed} value 
    * @param {HTMLElement} scope (optional)
    */
   setFieldValue: function(selector, value, scope){},
   /**
    * Checks if an element is visible:
    * @param {String} selector
    */
   visible: function(selector){}
};

/**
 * The colorizer module contains a Colorizer class which can generate ANSI colored Strings:
 */
var colorizer = {
    /**
     * Computes a colored version of the provided text {String} using a given predefined style:
     * @param {String} text
     * @param {String} styleName
     * @returns {undefined}
     */
    colorize: function(text, styleName){},
    
    /**
     * Formats a text {String} using the provided style definition. A style definition is a standard javascript Object instance which can define the following properties:
     * {String} bg: background color name
     * {String} fg: foreground color name
     * {bool} bold: apply bold formatting
     * {bool} underscore: apply underline formatting
     * {bool} blink: apply blink formatting
     * {bool} reverse: apply reverse formatting
     * {bool} conceal: apply conceal formatting
     * @param {String} text
     * @param {String} style
     * @returns {undefined}
     */
    format: function(text, style){}
};

/**
 * The Mouse class is an abstraction on top of various mouse operations like moving, clicking, double-clicking, rollovers, etc. It requires a Casper instance as a dependency for accessing the DOM.
 */
var mouse = {
    /**
     * Performs a click on the first element found matching the provided selector expression or at given coordinates if two numbers are passed:
     * @param {String} selector
     */
    click: function(selector){},
    
    /**
     * Sends a doubleclick mouse event onto the element matching the provided arguments:
     * @param {String} selector
     */
    doubleClick: function(selector){},
    
    /**
     * Sends a contextmenu mouse event onto the element matching the provided arguments:
     * @param {String} selector
     */
    rightClick: function(selector){},
    
    /**
     * Sends a mousedown mouse event onto the element matching the provided arguments:
     * @param {String} selector
     */
    down: function(selector){},
    
    /**
     * Moves the mouse cursor onto the element matching the provided arguments:
     * @param {String} selector
     */
    move: function(selector){},
    
    /**
     * Sends a mouseup mouse event onto the element matching the provided arguments:
     * @param {String} selector
     */
    up: function(selector){}
};

/**
 * This module provides simple helper functions, some of them being very specific to CasperJS though.
 */
var utils = {
    /**
    * Provides a better typeof operator equivalent, eg. able to retrieve the Array type.
    * @param  input
    */
   betterTypeOf: function(input){},
   /**
    * Provides a better instanceof operator equivalent, is able to retrieve the Array instance or to deal with inheritance.
    * @param  input
    * @param  constructor
    */
   betterInstanceOf: function(input, constructor){},
   /**
    * Dumps a JSON representation of passed argument to the standard output. Useful for debugging your scripts.
    * @param  value
    */
   dump: function(value){},
   /**
    * Retrieves the extension of passed filename.
    * @param  file 
    */
   fileExt: function(file){},
   /**
    * Fills a {String} with trailing spaces to match pad length.
    * @param  text
    * @param  pad
    */
   fillBlanks: function(text, pad){},
   /**
    * Formats a {String} against passed args. sprintf equivalent.
    * @param  f
    */
   format: function(f){},
   /**
    * Retrieves the value of an Object foreign property using a dot-separated path String:
    * @param {Object}  obj
    * @param {String} path
    */
   getPropertyPath: function(obj, path){},
   /**
    * Makes a constructor inheriting from another. Useful for subclassing and extending.
    * @param  ctor
    * @param  superCtor
    */
   inherits: function(ctor, superCtor){},
   /**
    * Checks if passed argument is an instance of Array.
    * @param  value 
    */
   isArray: function(value){},
   /**
    * Checks if passed argument is an instance of Casper.
    * @param  value 
    */
   isCasperObject: function(value){},
   /**
    * Checks if passed argument is a cliprect object.
    * @param  value
    */
   isClipRect: function(value){},
   /**
    * Returns subject falsiness.
    * @param  subject 
    */
   isFalsy: function(subject){},
   /**
    * Checks if passed argument is a function.
    * @param  value
    */
   isFunction: function(value){},
   /**
    * Checks if passed filename is a Javascript one (by checking if it has a .js or .coffee file extension).
    * @param  file 
    */
   isJsFile: function(file){},
   /**
    * Checks if passed argument is a null.
    * @param  value
    */
   isNull: function(value){},
   /**
    * Checks if passed argument is an instance of Number.
    * @param  value
    */
   isNumber: function(value){},
   /**
    * Checks if passed argument is an object.
    * @param  value
    */
   isObject: function(value){},
   /**
    * Checks if passed argument is an instance of String.
    * @param  value
    */
   isString: function(value){},
   /**
    * Returns subject truthiness.
    * @param  subject
    */
   isTruthy: function(subject){},
   /**
    * Checks if passed argument has its type matching the type argument.
    * @param  what
    * @param  type
    */
   isType: function(what, type){},
   /**
    * Checks if passed argument is undefined.
    * @param  value 
    */
   isUndefined: function(value){},
   /**
    * Checks if passed argument is an instance of native PhantomJS’ WebPage object.
    * @param  what
    */
   isWebPage: function(what){},
   /**
    * Merges two objects recursively.
    * @param  origin
    * @param  add
    * @param {Object}  opts
    */
   mergeObjects: function(origin, add, opts){},
   /**
    * Creates an (HT|X)ML element, having optional attributes added.
    * @param  name
    * @param  attributes
    */
   node: function(name, attributes){},
   /**
    * Serializes a value using JSON format. Will serialize functions as Strings. Useful for debugging and comparing objects.
    * @param  value
    */
   serialize: function(value){},
   /**
    * Retrieves unique values from within a given Array.
    * @param  array 
    */
   unique: function(array){}
};