const Employee = require("./lib/Employee")

const generateteam = team => {
    const generatemanager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `
    }
    const generateengineer = engineer => {
        /// copy from above ^


    }
    const generateintern = intern => {

    }
    const html = []
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generatemanager(manager)))


    html.push(team.filter(employee => employee.getRole() === "Engineer").map(manager => generateengineer(manager)).join(""))
    html.push(team.filter(employee => employee.getRole() === "Intern").map(manager => generateintern(manager)).join(""))
    return html.join("");
}