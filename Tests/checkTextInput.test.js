const functions = require('../view/checkForm');

//true tests

test('Julie is an name', () => {
  expect(functions.checkTextInput("Julie")).toBe(true); 
});

test('Anna-Marie is an name', () => {
  expect(functions.checkTextInput("Anna-Marie")).toBe(true); 
});

test('Mr. Clown is a name (I guess)', () => {
  expect(functions.checkTextInput("Mr. Clown")).toBe(true); 
});


//false test
test("7 isn't an name", () => {
  expect(functions.checkTextInput('7')).toBe(false);
});

test("blank string isn't an name", () => {
  expect(functions.checkTextInput('')).toBe(false);
});

test("?!29Ann isn't a name", () => {
  expect(functions.checkTextInput('?!29Ann')).toBe(false);
});