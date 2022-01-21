const fs = require('fs')


module.exports = class FileSystem {
    static read(path){
        return new promise((resolve,rejects) => {
            fs.readFile(path ,(err,data) => {
                if (err) return rejects(err);
                resolve(data)
        
            })
        })
        
        
    }
    static write(){

    }
}
    
    