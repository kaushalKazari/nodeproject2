
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/meanDB')
.then((connection)=>{
    console.log("DB Connection sucessful.")
}).catch((error)=>{
    console.log("Error in connection")
});

module.exports=mongoose