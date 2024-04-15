const {Schema,model}=require('../connection')
const productSchema = new Schema({
    name:String,
    cateogory:String,
    price:String,
    description: String
});
module.exports = model('product',productSchema)