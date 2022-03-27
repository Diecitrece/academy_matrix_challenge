const inquirer = require('inquirer')
const resolutor = require('./matrix_resolutor');
const fs = require('fs');
let matrix = [];
let pass = false;
function get()
{
    let file_option = null;
    let questions = [
        {
          type: 'list',
          name: 'input_choice',
          message: "How will you input the matrix?",
          choices: ['Write from terminal', 'Import from CSV', 'Import from Text file']
        }
      ]
    
    inquirer.prompt(questions).then((answers) => 
    {
      if(answers['input_choice'] == questions[0].choices[0])
      {
          let questions = [
              {
                type: 'input',
                name: 'text',
                message: "Input your matrix separating numbers with spaces, and rows with commas"
              }
            ]
            
            inquirer.prompt(questions).then((answers) => 
            {
              answers['text'].split(',').map((row)=>{matrix.push(row.split(' '))});
              pass = true;
              console.log(resolutor.resolve_matrix(matrix))
            })
          
      }
      if(answers['input_choice'] == questions[0].choices[1]) file_option = '.csv';
      if(answers['input_choice'] == questions[0].choices[2]) file_option = '.txt';
      if(file_option)
      {
          let questions = [
              {
                type: 'input',
                name: 'file',
                message: "Input file name"
              }
            ]
            
            inquirer.prompt(questions).then((answers) =>
            {
              fs.readFile('./matrix_files/'+answers['file']+file_option, 'utf8' , (err, data) => {
                if (err) 
                {
                  console.error(err)
                  return false;
                }
                data = data.replace(' ', '').split('\n').map( (row)=>
                {
                  matrix.push(row.split(','))
                }
                );
                pass = true;
                console.log('El determinante de la matriz ') 
                console.table(matrix)
                console.log(' es ' +  resolutor.resolve_matrix(matrix))
              })
            })   
      }
    })  
}
get()