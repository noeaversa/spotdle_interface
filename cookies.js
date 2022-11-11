function parseCookies(cookies_string) {
    var cookies = {};
    cookies_string.split('; ').forEach(function(cookie) {
        var parts = cookie.split('=');
        cookies[parts[0]] = (parts[1] || '').trim();
    });
    return cookies;
}

function hasCookie(cookie_name) {
    return cookie_name in parseCookies(document.cookie);
}

function clearCookies() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
}

function clearSingleCookie(cookie_name) {
    document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}