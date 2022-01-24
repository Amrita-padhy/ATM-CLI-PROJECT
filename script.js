/*1- ask for account
// 2-if account does not exist then ask to create an account
// 3-ask what they want to do
// 4-execute command
a-view
b-withdraw
c-deposite*/


//ACCOUNTS
const Account = require("./Account")
const commandLine = require("./commandLine")

async function main(){
  //ask for account
  try{
    const accountName = await commandLine.ask(
      "which account would you like to access?")
      //we find the account wheather it is created or not.
    const account = await Account.find(accountName)
    if (account == null) account = await promptCreateAccount(accountName)
    if (account !== null) await promptTask(account)
  } catch(e){
    commandLine.print ("ERROR:Please tyr again")
  }
}


  

//if there is an account then ask what would you like to do

async function promptCreateAccount(accountName) {
  const response = await commandLine.ask(
    "That account does not exixt . would you like to create an account ?(yes/NO)")
  if (response == "yes") {

    return await account.create(accountName)
  }
}

async function promptTask(account) {
  const response = await commandLine.ask(
    "What would you like to do?(view/deposit/withdraw)"
  )
  if (response === "deposit") {
    const amount = parseFloat(await commandLine.ask("how much?"))
    await account.deposit(amount)
    
  }
  else if (response === "withdraw") {
    const amount = parseFloat(await commandLine.ask("how much?"))
    try {
      await account.withdraw(amount)
    } catch (e) {
      commandLine.print(
        "We were unable to make the withdrawl.please make sure you have enough money in your account"
        )
    }
    
  }
    commandLine.print(`Your account balance is  ${account.balance}`)
}




main();

