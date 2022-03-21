const inquirer = require('inquirer')

let matrix = null;

function choice_selector()
{
    var questions = [
        {
          type: 'list',
          name: 'input_choice',
          message: "How will you input the matrix?",
          choices: ['Write from terminal', 'Import from CSV', 'Import from Text file']
        }
      ]
      
      inquirer.prompt(questions).then(answers => {
        for (let key of questions.choices.keys())
        {
            if(answers['input_choice'] == questions.choices[key]) return key
        }
      })
}
choice_selector();