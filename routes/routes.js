const express = require('express');
const router = express.Router();

const ObjectID = require('mongoose').Types.ObjectId;

const Employee = require('../models/employee');

// get, post, put, delete
// base path: http://localhost:3000/employee

// GET API
router.get('/',(req, res)=>{
    Employee.find({})
    .then(emp=>{
        res.status(200).json({
            msg:'Employee Details',
            emp
        })
    })
    .catch((err) => {
        res.status(400).json({
          msg: "Error",
          err: err,
        });
      })
})

// GET Singal Employee API Data
router.get('/:id',(req, res)=>{
    if(ObjectID.isValid(req.params.id)){
        Employee.findById(req.params.id)
        .then(emp=>{
            res.status(200).json({
                msg:'One Employee Deta',
                emp
            })
        })
        .catch(err=>{
            res.status(400).json({
                msg: "Error",
                err
            })
        })
       
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }    
})

// POST API
router.post('/', (req, res)=>{
    let emp = new Employee({
        name: req.body.name,
        position:req.body.position,
        dept:req.body.dept
    });
    emp.save().then((emp) => {
        res.status(200).json({
            msg: "user created successfully",
            emp
        });
    }).catch(err => {
        res.status(400).json({
            msg: "Error",
            err
        });
    });
    // emp.save((err, doc)=>{
    //     if(err){
    //         console.log('Error in Post Data' + err);
    //     }else{
    //         res.send(doc);
    //     }
    // })
})

// PUT API Data
router.put('/:id',(req, res)=>{
    if(ObjectID.isValid(req.params.id)){

        let emp = {
            name: req.body.name,
            position:req.body.position,
            dept:req.body.dept
        };

        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true})
        .then(emp=>{
            res.status(200).json({
                msg:req.params.id + ' ID Updated successfully',
                emp
            })
        })
        .catch(err=>{
            res.status(400).json({
                msg: "Error in Update Employee by " + req.params.id,
                err
            })
        })
       
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }    
})

// DELETE API Data
router.delete('/:id',(req, res)=>{
    if(ObjectID.isValid(req.params.id)){
        Employee.findByIdAndDelete(req.params.id)
        .then(emp=>{
            res.status(200).json({
                msg:req.params.id + 'ID deleted successfully',
                emp
            })
        })
        .catch(err=>{
            res.status(400).json({
                msg: "Error in Delete Employee by" + req.params.id,
                err
            })
        })
       
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }    
})

module.exports = router;