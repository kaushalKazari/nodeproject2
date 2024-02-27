const mongoose = require("../db");

const Employee = mongoose.model('Employee', {
    name:{type:String},
    position:{type:String},
    dept:{type:String}
})

module.exports = Employee;