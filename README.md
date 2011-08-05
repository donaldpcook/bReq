bReq
====

bReq is a super basic AJAX wrapper

Usage
-----

Just call bReq. Without any arguments, it will hit the current path.

Arguments
---------

If you want to define the url, enter it as the first argument. The second argument is then an optional options object.
`bReq('http://www.breqistheshizzle.com', {method: "post"});`

or

`bReq('http://www.breqistheshizzle.com');`

or if you just want to hit the current page, you can just pass the options object as the first argument:
`bReq({method: "post"});`

Options
-------

bReq accepts an options object. Below are the available options:

**data** *string* Data you want passed to the server. Make sure you serialize it first
`data: 'first_name=donald&last_name=cook'`

**type** *string* Data type you are expecting from the server. Currently only accepts html and json
`type: 'html'` Default

**method** *string* HTTP method type
`method: 'get'` Default

Supported Browsers
------------------

  * Firefox 3.5+
  * Google Chrome
  * Internet Explorer 7+
  * Safari 3+

Other browsers may work, but I haven't tested them.

License
-------

Copyright (c) 2011 Donald Cook (donald.cook@dachisgroup.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

ToDos
-----
  * Add some cross domain jsonp-ness
  * Add a simple serialize method
  * Add tests


