const express=require('express');
const userController =require('../controller/user')
const router =express.Router();

router
    .post('/users', userController.createProduct)
    .get('/users', userController.getAllProducts)
    .get('/users/:id', userController.getProduct)
    .put('/users/:id', userController.replaceProduct)
    .patch('/users/:id', userController.editProduct)
    .delete('/users/:id', userController.deleteProduct);
exports.router=router;