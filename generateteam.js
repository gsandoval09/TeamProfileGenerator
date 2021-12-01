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
            return 
    }
    const generateintern = intern => {
        
    }
    const html = []
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generatemanager(manager)))


    html.push(team.filter(employee => employee.getRole() === "Engineer").map(manager => generateengineer(manager)).join(""))
    html.push(team.filter(employee => employee.getRole() === "Intern").map(manager => generateintern(manager)).join(""))
    return html.join("");
}

    module.exports = team => {
        return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
          </head>
        
          <body>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 mb-3 team-heading jumbotron bg-info text-white">
                  <h1 class="text-center">My Team</h1>
                </div>
              </div>
            </div>
            <div> 
            ${generateteam(team)}
            </div>
          </body>
        </html>`
    }