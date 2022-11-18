const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModels.js')

//GET 
//get all todos
const getTodos = asyncHandler(async (req, res) => {

    const todos = await Todo.find();

    res.status(200).json(todos);
});

//POST 
//create new todo
const setTodo = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('pls add text')
    };

    const todo = await Todo.create({
        text: req.body.text,
    });

    res.status(200).json(todo);
});

//PUT
// update txt of todo
const updateTodo = asyncHandler(async (req, res) => {

    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error('Todo not found');
    };

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedTodo);
});
//PUT
//Update done
const updateDone = asyncHandler(async(req,res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        res.status(400);
        throw new Error('Todo not found');
    };
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTodo)

})
//DELETE
// todo by ID
const deleteTodo = asyncHandler(async (req, res) => {

    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error('Todo not found');
    };

    await todo.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    updateDone,
    deleteTodo
};