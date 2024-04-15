const {Schema,model}=require('../connection')
const productSchema = new Schema({
    name:String,
    email:String,
    password:String
});
module.exports = model('product',productSchema)