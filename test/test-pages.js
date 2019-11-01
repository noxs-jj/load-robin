var assert = require('assert');
var request = require('request');



it('Main page content', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        assert(body.includes("Hi there! I'm being served from"))
        done();
    });
});
