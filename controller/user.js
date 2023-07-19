const fs = require('fs')
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'), 'utf-8'));
const users=data.users
const express = require('express');


exports.createProduct=(req, res)=>{
    //console.log(req.body)
    users.push(req.body)
    res.status(200).json(req.body)
}
exports.getAllProducts=(req, res)=>{
    res.json(users)
}
exports.getProduct=(req, res)=>{
    // console.log(req.params.id)
    const id= +req.params.id
    const user =users.find(p=>p.id===id);
    res.json(user)
}
exports.replaceProduct=(req, res)=>{
    const id = +req.params.id
    const userIndex =users.findIndex(p=>p.id===id)
    users.splice(userIndex, 1, {...req.body, id:id})
    res.status(201).json();
}
exports.editProduct=(req, res)=>{
    const id = +req.params.id
    const userIndex =users.findIndex(p=>p.id===id)
    const user=users[userIndex]
    users.splice(userIndex, 1, {...user, ...req.body})
    res.status(201).json();
}

exports.deleteProduct=(req, res)=>{
    const id = +req.params.id
    const userIndex =users.findIndex(p=>p.id===id)
    const user=users[userIndex]
    users.splice(userIndex, 1)
    res.status(201).json();
}
