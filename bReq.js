// bReq - Simple Ajax
// quick and easy ajaxing
// created by Donald Cook
// license MIT

(function(w) {
    var xhr,
        error,
        type = "html",
        errors = [],
        getOb = function() {
            if (w.XMLHttpRequest) {
                return new XMLHttpRequest();
            } else if (w.ActiveXObject) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(e) {
                    return false;
                }
            }
        },
        setMethod = function(m) {
            var method = "GET";
            
            if (m && typeof m === "string") {
                method = m.toUpperCase();
            }
            
            return method;
        },
        setHeader = function(method) {
            if (method === "POST") {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
        },
        success = function(res) {
            return res;
        },
        parseRes = function() {
            var r = xhr.responseText,
                res;

            if (type === "json") {
                res = w.JSON ? window.JSON.parse(r) : eval('(' + r + ')');
            } else {
                res = r;
            }

            success(res);

        },
        stateChanged = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    parseRes();
                } else {
                    errors.push("Error:" + xhr.status);
                    if (error) {
                        error();
                    } else {
                        return false;
                    }
                }
            }
        },
        init = function(url, op) {
            if (typeof url === "object") {
                op = url;
            }
            op = op || {};

            var data = op.data,
                method;

            type = op.type;
            error = op.error;

            if (typeof op.success === 'function') {
                success = op.success;
            }

            // start up and save the XMLHttpRequest object
            xhr = getOb();

            // if that failed get out
            if (!xhr) {
                errors.push("Failed");
                if (error) {
                    error();
                } else {
                    return false;
                }
            }

            // clean up the method type
            method = setMethod(op.method);

            xhr.onreadystatechange = stateChanged;
            
            // if it's a GET, tack the data onto the URL
            if (method === "GET" && data) {
                url = url + '?' + data;
            }

            // open up the request
            xhr.open(method, url);

            // set the correct header
            setHeader(method);

            // send the data
            xhr.send(data);

            return xhr;
        };

    w.bReq = init;
}(this));
