const mongoose = require('mongoose');



const blogPostSchema = mongoose.Schema({
  "title": {type: String, required: true},
  "content": {type: String, required: true},
  "author": {
  		"firstName":{type: String, required: true},
  		"lastName":{type: String, required: true}
   },
   "date":{ type: Date, default: Date.now }
 });





blogPostSchema.virtual('fullNameString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});






blogPostSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    date:this.date,
    title: this.title,
    content:this.content,
    author: this.fullNameString   
  };
}



const BlogPost = mongoose.model('Post', blogPostSchema);


module.exports = {BlogPost};
