const { doesNotMatch } = require("assert");
const fs = require("fs")

function readTasks() {
    const jsonText = fs.readFileSync("tasks.json", "utf-8")
    if(!jsonText) return [];
    const jsArr = JSON.parse(jsonText)
    return jsArr;
}


function writeTasks(tasks) {
    const inputTasts = JSON.stringify(tasks)
    fs.writeFileSync("tasks.json", inputTasts)
}

let command = process.argv[2]
let arg1 = process.argv[3]
let arg2 = process.argv[4]

if(command === "add") {
    let arr = readTasks()
    let task = {
        id: arr.length === 0 ? 1: Math.max(...arr.map(task => task.id)) + 1,
        description: arg1,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date(),
    }
    arr.push(task)
    writeTasks(arr)
    console.log(`Task added successfully (ID: ${task.id})`)
}

if(command === "list") {
    let tasks = readTasks()
    if (tasks.length === 0) return "No tasks found"

    let arg = arg1
    if(arg) {
        tasks = tasks.filter((task) => task.status === arg)
    }

    for(let i = 0; i < tasks.length; i++) {
        console.log(tasks[i].id, "|", tasks[i].description, "|", tasks[i].status)
    }
}

if(command === "update") {
    let tasks = readTasks()
    const taskId = Number(arg1)

    for(let i = 0; i < tasks.length; i++) {
        if(taskId == tasks[i].id) {
            tasks[i].description = arg2
            tasks[i].updatedAt = new Date().toISOString()
            console.log(`Task updated successfully (ID: ${taskId})`)
        }
    }
    writeTasks(tasks)
    
}

if(command === "delete") {
    let tasks = readTasks()
    const taskId = Number(arg1)

    const newArr = tasks.filter((task) => task.id !== taskId)

    writeTasks(newArr)
    console.log(`Task deleted successfully (ID: ${taskId})`)
    
}

if(command === "mark-in-progress") {
    let tasks = readTasks()
    const taskId = Number(arg1)

    for(let i = 0; i < tasks.length; i++) {
        if(taskId === tasks[i].id) {
            tasks[i].status = "in-progress"
            tasks[i].updatedAt = new Date().toDateString()
            console.log(`Task status updated successfully (ID: ${taskId})`)
        }
    }

    writeTasks(tasks)
}

if(command === "mark-done") {
    let tasks = readTasks()
    const taskId = Number(arg1)

    for(let i = 0; i < tasks.length; i++) {
        if(taskId === tasks[i].id) {
            tasks[i].status = "done"
            tasks[i].updatedAt = new Date().toDateString()
            console.log(`Task status updated successfully (ID: ${taskId})`)
        }
    }

    writeTasks(tasks)
}

if(command === "mark-todo"){
    let tasks = readTasks()
    const taskId = Number(arg1)

    for(let i = 0; i < tasks.length; i++) {
        if(taskId === tasks[i].id) {
            tasks[i].status = "todo"
            tasks[i].updatedAt = new Date().toDateString()
            console.log(`Task status updated successfully (ID: ${taskId})`)
        }
    }

    writeTasks(tasks)
}