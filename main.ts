#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    {message:chalk.magenta("\nEnter first number"), type: "number", name: "firstNumber"},
    {message: chalk.magenta("\nEnter second number"), type: "number", name: "secondNumber"},
    {message: chalk.magenta("\nSelect one of the operators to perform action"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"],
    },
]);
// console.log(answer);
//conditional statement

if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}   
   else if (answer.operator === "Subtraction"){
        console.log(answer.firstNumber - answer.secondNumber);
        
    }

    else if (answer.operator === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumber);
        
    }

    else if (answer.operator === "Division"){
        console.log(answer.firstNumber / answer.secondNumber);
        
    }

    else if (answer.operator === "Modulus"){
        console.log(answer.firstNumber % answer.secondNumber);
        
    } 
   

    else{ 
        console.log("Please select a valid operator");
        
    }
