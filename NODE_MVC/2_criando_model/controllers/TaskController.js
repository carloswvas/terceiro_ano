const User = require("../models/Task");

module.exports = {
    async store(request, response) {
        const { title, description, done } = request.body

        const task = await User.create({ title, description, done });

        return response.json(console.log(task));
    }
}