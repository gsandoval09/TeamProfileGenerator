const Intern = require("../lib/Intern");


// //test to see if message shows in npm test


test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Person", 1, "test@test.com", "Fox Lane");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can set school data via constructor", () => {
    const testValue = "Fox Lane";
    const e = new Intern("Person", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });

  
test("Can info from getSchool()", () => {
    const testValue = "Fox Lane";
    const e = new Intern("Person", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });



