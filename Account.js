FileSystem = require("./FileSystem")


const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

module.exports = class Account {
constructor(name) {
    console.log(name);
    this.#name = name
}

#name
#balance
get name(){
    return this.#name
}
get balance(){
    return this.#balance
}
get filepath(){
    return `accounts/${this.name}.txt`
}
  async #load(){
    this.#balance = parseFloat(await FileSystem.read(this.filepath))
    
}

     static async find(accountName){
        const account = new Account(accountName)

        try{
            await account.#load()
            return account
        }catch(e){
            return

        }

    }
}