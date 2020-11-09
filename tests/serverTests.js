// var expect = require('chai').expect;
var request = require('request');
console.log("request: ", request);

describe("Test for OK response", () => {
  it('Main page content', () => {
    request('http://localhost:3000', function (error, response, body) {
      expect(response.statusCode).toBe(200);
    });
  });
});