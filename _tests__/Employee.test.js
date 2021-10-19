const Employee = require("../Lib/Employee");
//test to see if message shows in end product

test("See if employee function works", () => {
const e = new Employee ();
exact(typeof(e)).toBe("object");
});

test("Write name of employee here", () => {
    const name ="Kakashi";
    const e = new Employee(name);
    expect(e.name) .toBe(name);
});

test("id of person shows here", () => {
    const testValue = 100;
    const e = new Employee("Person", testValue);
    expect(e.id).toBe(testValue);
});

test("test to get employee email", () => {
    const testValue ="test@test.com"
    const e = new Employee("Person", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("get name of employee here()", () => {
    const testValue = "Kakashi";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id of employee here()", () => {
    const testValue = 100;
    const e = new Employee("Person", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email by email function()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Person", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("return \"Employee\"", () => {
    const testValue = "Employee"
    const e = new Employee("Kakashi", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});



