const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
// const { test } = require("../lib/Intern");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Person","test@test.com", testValue);
  
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Person", "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});
