require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const server = express();
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
// const { Schema } = mongoose;

//importing product controller
// const productController =require('./controller/product')
//generating express router 


// db connection
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//Better way
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected")
}
//schema  //this is code has been pasted at model
// const productSchema = new Schema({
//     title: String,// String is shorthand for {type: String}
//     description: String,
//     price: Number,
//     discountPercentage: Number,
//     rating: Number,
//     brand: String,
//     category: String,
//     thumbnail: String,
//     images: [String]
//   });

// //Model
// const Product = mongoose.model('Product', productSchema);

//body parser or middleware
server.use(cors());
server.use(express.json());
server.use(morgan('default'));
// server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use('/products', productRouter.router);
server.use('/api', userRouter.router);
server.use('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})





//CRUD API's
// server.post('/products', productController.createProduct);
// server.get('/products', productController.getAllProducts);
// server.get('/products/:id', productController.getProduct);
// server.put('/products/:id', productController.replaceProduct);
// server.patch('/products/:id', productController.editProduct);
// server.delete('/products/:id', productController.deleteProduct);

//We can write like this also
// server
//     .post('/products', productController.createProduct)
//     .get('/products', productController.getAllProducts)
//     .get('/products/:id', productController.getProduct)
//     .put('/products/:id', productController.replaceProduct)
//     .patch('/products/:id', productController.editProduct)
//     .delete('/products/:id', productController.deleteProduct);

//Router
//i have shifted this router in routes




// console.log(process.env.DB_PASSWORD)
server.listen(process.env.PORT, ()=>{
    console.log('Server started')
})



//admin
//pass: 28oN8c8QlqRrZCmn
//mongoDB


//data base user
//name = admin
//pass= vzgoOL19PJvEbqs2