#! /usr/bin/env node
import inquirer from "inquirer"
console.log("Welocome user to ATM machine")
let myPin = 1234
let TotalBalance = 10000 //DALLARS
let pinanswer = await inquirer.prompt({
    name : "pin",
    message : "Enter Your PIN correctly , Dont let other see it",
    type : "number"
});
if(pinanswer.pin === myPin){
    console.log("You've the write PIN code plz Proceed");
    let operations = await inquirer.prompt({
        name : "ansoperation",
        message : "Please select a Function From List given below",
        type : "list",
        choices : ["withdraw","Checkbalance"]
    })
    if(operations.ansoperation === "withdraw"){
        let amountanswer = await inquirer.prompt({
            name : "Amount",
            message : "Enter your amount",
            type : "number"
        })
        TotalBalance -= amountanswer.Amount
        console.log(`Now your remaining balance is ${TotalBalance}` )
    }    else{
        console.log(`Your balance is ${TotalBalance}` )
    }
}   else{
    console.log("You've entered the wrong PIN code plz try again");
};