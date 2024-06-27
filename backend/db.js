const mongoose  = require('mongoose');
mongoose.connect("mongodb+srv://admin:232004Aditya%40mongo@cluster0.dahrvb8.mongodb.net/todo_app");
const todoSchema  = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}