const fs = require('fs')
const express = require('express');
const mongoose = require('mongoose');

const model=require('../model/product');
const Product=model.Product

// exports.createProduct=(req, res)=>{
//     const product=new Product();
//     product.title='phoneX';
//     product.price='999';
//     product.rating='5';
//     product.brand='Banana';
//     product.save()
//         .then((doc) => {
//             console.log({ doc });
//             res.status(201).json(doc);
//         })
//         .catch((err) => {
//             console.error(err);
//             // Handle the error appropriately
//         });
//     // res.status(201).json(req.body)
//   }

exports.createProduct=(req, res)=>{
    const product=new Product(req.body);
    product.save()
        .then((doc) => {
            console.log({ doc });
            res.status(201).json(doc);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json(err);
        });
  };


exports.getAllProducts= async(req, res)=>{
    const products= await Product.find({price:{$gt:500}});
    res.json(products)
};
exports.getProduct= async(req, res)=>{
    const id= req.params.id
    // const product= await Product.find({_id:id});
    const product= await Product.findById(id);
    res.json(product)
}

exports.replaceProduct= async(req, res)=>{
    const id = req.params.id
    try{
        const doc = await Product.findOneAndReplace({_id:id}, req.body, {new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
exports.editProduct=async(req, res)=>{
    const id = req.params.id
    try{
        const doc = await Product.findOneAndUpdate({_id:id}, req.body, {new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteProduct=async(req, res)=>{
    const id = req.params.id
    try{
        const doc = await Product.findOneAndDelete({_id:id})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
