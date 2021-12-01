const Engineer = require("../lib/Engineer");

test("Get github inside of url", () => {
    const testValue = "GithubUser";
    const e = new Engineer("Person", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue= "Engineer";
    const e = new Engineer("Person", 1, "test@test.com", "Githubuser");
    expect(e.getRole()).toBe(testValue);
});
test("grabs the users github username from github", () => {
    const testValue = "Githubuser";
    const e = new Engineer("Person", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
