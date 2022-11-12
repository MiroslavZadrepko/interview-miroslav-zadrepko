const asyncHandler = require('express-async-handler');

//GET
const getTodos = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'will get todos' })
});

//POST
const setTodo = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('pls add text')
    }
    console.log(req.body);
    res.status(200).json({ message: "will add todo" })
});

//PUT
const updateTodo = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `will edit todo ${req.params.id}` })
});

//DELETE
const deleteTodo = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `will delete todo ${req.params.id}` })
});

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
};