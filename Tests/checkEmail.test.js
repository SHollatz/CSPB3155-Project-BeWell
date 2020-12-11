/**
authors: Julie Kirkpatrick
purpose:to test validation the email input on the report page
*/
const functions = require('../view/checkForm');


//example emails from https://gist.github.com/cjaoude/fd9910626629b53c4d25

//true email tests

test('email@example.com is an email', () => {
  expect(functions.checkEmail('email@example.com')).toBe(true);
});


test('firstname.lastname@example.com', () => {
  expect(functions.checkEmail('firstname.lastname@example.com')).toBe(true);
	});
	
test('email@subdomain.example.com', () => {
  expect(functions.checkEmail('email@subdomain.example.com')).toBe(true);
	});
	
test('firstname+lastname@example.com', () => {
  expect(functions.checkEmail('firstname+lastname@example.com')).toBe(true);
	});

	
test('email@123.123.123.123', () => {
  expect(functions.checkEmail('email@123.123.123.123')).toBe(true);
	});


test('email@[123.123.123.123]', () => {
  expect(functions.checkEmail('email@[123.123.123.123]')).toBe(true);
});

test('"email"@example.com', () => {
  expect(functions.checkEmail('"email"@example.com')).toBe(true);
});

test('1234567890@example.com', () => {
  expect(functions.checkEmail('1234567890@example.com')).toBe(true);
});

test('email@example-one.com', () => {
  expect(functions.checkEmail('email@example-one.com')).toBe(true);
});

test('_______@example.com', () => {
  expect(functions.checkEmail('_______@example.com')).toBe(true);
});

test('email@example.name', () => {
  expect(functions.checkEmail('email@example.name')).toBe(true);
});

test('email@example.museum', () => {
  expect(functions.checkEmail('email@example.museum')).toBe(true);
});

test('email@example.co.jp', () => {
  expect(functions.checkEmail('email@example.co.jp')).toBe(true);
});

test('firstname-lastname@example.com', () => {
  expect(functions.checkEmail('firstname-lastname@example.com')).toBe(true);
});


//false email tests
test('plainaddress', () => {
  expect(functions.checkEmail('plainaddress')).toBe(false);
});


test('@example.com', () => {
  expect(functions.checkEmail('@example.com')).toBe(false);
});


test('email.example.com', () => {
  expect(functions.checkEmail('email.example.com')).toBe(false);
});


test('blank string', () => {
  expect(functions.checkEmail('')).toBe(false);
});

test('email@example', () => {
  expect(functions.checkEmail('email@example')).toBe(false);
});
