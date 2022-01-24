const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');


module.exports = class FileSystem {
    static read(path){
        return new Promise((resolve,rejects) => { 
            fs.readFile(path ,(err,data) => {
                if (err) return rejects(err);
                resolve(data)
            })
        })
    }
    static write(path,content){
        return new Promise((resolve,reject) => {
            fs.writeFile(path,content.toString(),err => {
                if (err) return reject(err)
                resolve()

            })
        })

    }

}
    
    