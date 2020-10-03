const fs = require("fs");
const inquirer = require("inquirer");




// questions for user
inquirer.prompt([{
        type: "input",
        message: "what is your project title",
        name: "title"
    },
    {
        type: "input",
        message: "Description of the project?",
        name: "description"
    }
  
]).then(function (response) {
    fs.writeFile("readme.md", createReadme(response) + '\n', function (err) {

        if (err) {
            console.log(err);
        } else {
            console.log("readme generated!");
        }
    });
})
function createReadme (data) {
    const {title,description} = data
    return `# ${title}
## description
${description}






    `


}
