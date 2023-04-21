const Book = require("./Book")

module.exports.create = function(payload){
    
}
module.exports.update = function(id, payload){}
module.exports.delete = async function(id){
    await Book.findByIdAndDelete({_id:id})
}
module.exports.list = async function(){
   return await Book.find()
}
module.exports.get = async function(id){
    return await Book.finfById({_id:id})
}