const express = require('express');
const router = express.Router();
const { getTodos, setTodo, updateTodo, deleteTodo } = require('../controllers/todoControlers')

router.get('/', getTodos)
router.post('/', setTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router;