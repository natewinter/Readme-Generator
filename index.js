const fs = require("fs");
const inquirer = require("inquirer");

// questions for user
function promptInit() {
    inquirer.prompt([{
                type: "input",
                message: "what is your project title",
                name: "title"
            },
            {
                name: "description",
                type: "input",
                message: "Description of the project?"
            },
            {
                name: "github",
                type: "input",
                message: "What is your Github username?"
            },
            {
                name: "license",
                type: "list",
                message: "What license did you use for your project?",
                choices: ["MIT", "Apache", "GPLv3"]
            },
            {
                name: "installation",
                type: "input",
                message: "how to install"
            },
            {
                name: "contribution",
                type: "input",
                message: "Who were the contributers?"
            },
            {
                name: "faq",
                type: "input",
                message: "Are there any FAQS?"
            }

        ])

        .then((answer) => {
            // ReadMe format template begins here
            const readMeTemplate =
                `# ${answer.title} Readme
    
##Contents
    
1.[Introduction](#description)
       
2.[Installation](#installation)
    
3.[Licenses](#license)
    
4.[Contributions](#contribution)
    
5.[Github](#github)
    
6.[Additional Info](#questions)
    
<br>
     
## 1. Introduction {#description}
${answer.description}
<br>
## 2. Installation {#installation}
${answer.installation}
<br>
## 3. Licenses {#license}
![Software License](https://img.shields.io/static/v1?label=License&message=${answer.licenses}&color=brightgreen)
<br>
## 4. Contributions {#contribution}
${answer.contribution}
<br>
## 5. Github {#github}
${answer.github}
<br>
## 6. Additional Info {#faq}
${answer.faq}
<br>`;

            const fileName = `${answer.title.replace(/\s/g, '').toLowerCase()}.md`;

            fs.writeFile(fileName, readMeTemplate, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("All set!");
            });
        })
}


promptInit()