FileSystem = require("./FileSystem")
module.exports = class Account {
    constructor(name) {
        this.#name = name
    }

    #name
    #balance
    get name() {
        return this.#name
    }
    get balance() {
        return this.#balance
    }
    get filepath() {
        return `accounts/${this.name}.txt`
    }
    async #load() {
        this.#balance = parseFloat(await FileSystem.read(this.filepath))
        console.log(this.#balance);

    }
    async withdraw(amount) {
        if (this.balance < amount)  throw new Error()
        await FileSystem.write(this.filepath,this.#balance - amount)
        this.#balance = this.#balance - amount
    }



    async deposit(amount) {
        await FileSystem.write(this.filepath,this.#balance + amount)
        this.#balance = this.#balance + amount
    }

    static async find(accountName) {
        const account = new Account(accountName)

        try {
            await account.#load()
            return account
        } catch (e) { 
            return

        }

    }

    static async create(accountName) {
        const account = new Account(accountName)
        FileSystem.write(account.filepath,0)
        account.#balance = 0 

        return account
    }

}