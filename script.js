/*1- ask for account
2-if account does not exist then ask to create an account
3-ask what they want to do
4-execute command
  a-view
  b-withdraw
  c-deposite*/


  //ACCOUNTS
  const Account = require("./Account")
  const commandLine = require("./commandLine")

async function main(){

     const accountName = await commandLine.ask(
         "which account would you like to access?")
         console.log(accountName);
         const account = await Account.find(accountName)
         if (account){
           console.log("found account");
         }else{
           console.log("can not find");
         }
} 
main();

  