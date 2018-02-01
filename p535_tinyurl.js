// TinyURL is a URL shortening service where you enter a URL such as
// https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service.
// There is no restriction on how your encode/decode algorithm should work.
// You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

var url = {}

var encode = function(longUrl) {
    let shortUrl = 'http://tinyurl.com/' + longUrl.toString(36)
    url[shortUrl] = longUrl
    return shortUrl
};

var decode = function(shortUrl) {
    return url[shortUrl] || ''
};

console.log(urls)
const longUrl = 'https://leetcode.com/problems/design-tinyurl1'
const shortUrl = encode(longUrl)
console.log(longUrl)
console.log(shortUrl)
console.log(decode(shortUrl))