/**Author: Sabine Hollatz*/

const request = require('request');

describe("Test landing page for OK response", () => {
  it('Main page content', () => {
    request('http://localhost:3000', function (error, response, body) {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Test home page for OK response", () => {
  it('Main page content', () => {
    request('http://localhost:3000/BeWellHomePage.html', function (error, response, body) {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Test page 'Flight Data' for OK response", () => {
  it('Main page content', () => {
    request('http://localhost:3000/BeWellFrontendResults.html', function (error, response, body) {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Test page 'About' for OK response", () => {
  it('Main page content', () => {
    request('http://localhost:3000/about.html', function (error, response, body) {
      expect(response.statusCode).toBe(404);
    });
  });
});

describe("Test home page url", () => {
  it('home page url', async () => {
      const url = await location.href
      expect(url).toMatch('http://localhost/');
  });
});
