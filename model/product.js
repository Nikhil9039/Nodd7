const mongoose = require('mongoose');
const { Schema } = mongoose;

//schema
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
//schema with validation
const productSchema = new Schema({
  title: {type:String,required:true, unique:true},
  description: {type:String, required:true},
  price: {type:Number, min:[0, 'Wrong minimum price'], required:true},
  discountPercentage: {type:Number, required:true},
  rating: {type:Number,min:[0, 'wrong minimum rating'], max:[5, 'wrong maximum rating'], required:true, default:0},
  brand:{type: String, required:true},
  category: {type:String, required:true},
  thumbnail: {type:String, required:true},
  images: [String]
});

//Model
// const Product = mongoose.model('Product', productSchema);
exports.Product = mongoose.model('Product', productSchema);



