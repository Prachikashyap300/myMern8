const {Schema,model}=require('../connection')
const productSchema = new Schema({
    pname:String,
    pcateogory:String,
    pprice:String,
    pdescription: String
});
module.exports = model('product',productSchema)