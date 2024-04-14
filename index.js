#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welocome user to ATM machine");
let myPin = 1234;
let TotalBalance = 10000; //DALLARS
let pinanswer = await inquirer.prompt({
    name: "pin",
    message: "Enter Your PIN correctly , Dont let other see it",
    type: "number",
});
if (pinanswer.pin === myPin) {
    console.log("You've the write PIN code plz Proceed");
    let operations = await inquirer.prompt({
        name: "ansoperation",
        message: "Please select a Function From List given below",
        type: "list",
        choices: ["withdraw", "Fastcash", "Checkbalance"],
    });
    if (operations.ansoperation === "withdraw") {
        let amountanswer = await inquirer.prompt({
            name: "Amount",
            message: "Enter your amount",
            type: "number",
        });
        if (amountanswer.Amount > 10000) {
            console.log("You have insufficient balance");
        }
        else if (amountanswer.Amount <= 10000) {
            TotalBalance -= amountanswer.Amount;
            console.log(`You've been debited with ${amountanswer.Amount}`);
            console.log(`Now your remaining balance is ${TotalBalance}`);
        }
    }
    else if (operations.ansoperation === "Fastcash") {
        let amountchoice = await inquirer.prompt({
            name: "amount",
            message: "Please select a amount from the given below list for withdrawl",
            type: "list",
            choices: ["1000", "2000", "5000", "10000", "12000", "14000", "18000", "20000"]
        });
        if (amountchoice.amount <= TotalBalance) {
            console.log(`You've been credited with ${amountchoice.amount}`);
            console.log(`Now your remaining balance is ${TotalBalance -= amountchoice.amount}`);
        }
        else if (amountchoice.amount > TotalBalance) {
            console.log("Yov've insufficient balance");
        }
    }
    else if (operations.ansoperation === "Checkbalance") {
        console.log(`Your balance is ${TotalBalance}`);
    }
}
else {
    console.log("You've entered the wrong PIN code plz try again");
}
