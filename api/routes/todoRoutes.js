const express = require('express');
const router = express.Router();
const { getTodos, setTodo, updateTodo, deleteTodo, updateDone } = require('../controllers/todoControlers')

router.get('/', getTodos)
router.post('/', setTodo)
router.put('/:id', updateTodo)
router.put('/:id', updateDone)
router.delete('/:id', deleteTodo)

module.exports = router;