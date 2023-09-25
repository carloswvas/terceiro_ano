const Task = require('../models/Task')

module.exports = class TaskController{
    static createTask(request, response){
        return response.render('tasks/create')
    }
    static showTasks(request, response){
        return response.render('tasks/all')
    }
}