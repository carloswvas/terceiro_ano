const Task = require('../models/Task')

module.exports = class TaskController{
    static createTask(request, response){
        return response.render('tasks/create')
    }
    static async createTaskSave(request, response){
        const task = {
            title: request.body.title,
            description: request.body.description,
            done: false
        }
        //valida os dados
        //trata os dados
        await Task.create(task)
        return response.redirect('/tasks')
    }
    static showTasks(request, response){
        
        return response.render('tasks/all')
    }
}