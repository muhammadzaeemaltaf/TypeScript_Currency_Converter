#! /usr/bin/env node

import inquirer from "inquirer";

const currency : any = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

const currencyChoices = Object.keys(currency);

let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: currencyChoices,
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: currencyChoices,
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    }
]);

let fromAmount = currency[userAnswer.from]; 
let toAmount = currency[userAnswer.to]; 
let amount = userAnswer.amount;

let convertedAmount = (amount / fromAmount) * toAmount; 

console.log(convertedAmount.toFixed(2));