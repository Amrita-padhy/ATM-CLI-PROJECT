
  const readline = require("readline")
  module.exports = class commandLine {
  static ask(qustion){
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
    })

    return new Promise(resolve => {
        rl.question(`${qustion}  `, answer =>{
            resolve(answer);
            rl.close()
        })
    } )
  }
  static print(text){
      console.log(text);
  }
}