const mongoose = require("mongoose");
class Database{

    constructor() {
        this.connect();
    }
    connect(){

        mongoose.connect("mongodb+srv://admin:dbUserPass@twitterclone.lomcs.mongodb.net/test")
        .then(() => {
            console.log("db connected");
        })
        .catch((err) => {
            console.log("db error" + err);
        })
        }
}
module.exports = new Database();