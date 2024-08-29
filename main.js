#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//initialize my balance and my pin
let myBalance = 100000;
let myPin = 2007;
//print Wellcome message
console.log(chalk.blue("\n    \Wellcome to CodeWithNoor - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter Your Pin Code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Pin is Correct, Login Successfully!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawlMethod",
                type: "list",
                message: "Select Withdrawl Method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawlMethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000, 2000, 5000, 10000, 50000],
                }
            ]);
            if (fastcashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastcashAns.fastCash;
                console.log(`${fastcashAns.fastCash} Withdraw Successfully!`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawlMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter The Amount To Withdraw :",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance!");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount}Withdraw Successfully`);
                console.log(`Your Remaining Acount Balance is: ${myBalance} THANK YOU!`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Pin is Incorrect, Try Again!"));
}
