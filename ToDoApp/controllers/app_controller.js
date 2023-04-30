
const List = require('../models/task');
const taskTypes = ['Personal', 'Work', 'School', 'Cleaning', 'Other'];

// Default home page to show all the tasks created by user
module.exports.listData = function (req, res) {

    List.find().then(function (tasks) {
        return res.render('app', {
            title: 'ToDo App',
            task_list: tasks
        })
    })


}

// Once the task is created by user, store it in DataBase
module.exports.createTask = function (req, res) {

    console.log(req.body);
    List.create({
        description: req.body.description,
        type: taskTypes[req.body.type - 1],
        deadline: req.body.deadline
    });

    return res.redirect('back');
}

// Once the tasks are selected for delete by user, delete the data from the DataBase
module.exports.deleteTasks = function (req, res) {

    // console.log(req.body);
    console.log(typeof (req.body.task_id));

    if (typeof (req.body.task_id) === 'string') {
        List.findByIdAndDelete(req.body.task_id).then(function (data) {
            console.log('Deleted ', data);
        })
            .catch(function (err) {
                console.log('Error while deleting ', err);
            });
    }
    else if (typeof (req.body.task_id) === 'object') {
        for (let taskId of req.body.task_id) {
            List.findByIdAndDelete(taskId).then(function (data) {
                console.log('Deleted ', data);
            })
                .catch(function (err) {
                    console.log('Error while deleting ', err);
                });
        }
    }

    return res.redirect('back');
}