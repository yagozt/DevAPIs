'use strict';

module.exports = function(app){
    var todoList = require('../controllers/nodeApiController');

    // Rotas
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task)

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.remove_a_task)
};