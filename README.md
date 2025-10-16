# Task Tracker CLI - Command Line Todo Application

A simple and efficient command-line todo application built with Node.js. Manage your tasks directly from your terminal!

## Features

- ✅ Add new tasks
- ✅ Update existing tasks
- ✅ Delete tasks
- ✅ Mark tasks as todo, in-progress, or done
- ✅ List all tasks or filter by status
- ✅ Persistent storage using JSON

## Installation

1. Clone this repository:
```bash
git clone https://github.com/alchemycodess/task-tracker-cli-project.git
```

2. Navigate to the project directory:
```bash
cd task-cli-project
```

## Usage

### Add a new task
```bash
node index.js add "Buy groceries"
```
Output: `Task added successfully (ID: 1)`

### Update a task
```bash
node index.js update 1 "Buy groceries and cook dinner"
```
Output: `Task updated successfully (ID: 1)`

### Delete a task
```bash
node index.js delete 1
```
Output: `Task deleted successfully (ID: 1)`

### Mark task status
```bash
node index.js mark-in-progress 1
node index.js mark-done 1
node index.js mark-todo 1
```

### List all tasks
```bash
node index.js list
```

### List tasks by status
```bash
node index.js list done
node index.js list todo
node index.js list in-progress
```

## Task Properties

Each task has the following properties:
- **id**: Unique identifier for the task
- **description**: Short description of the task
- **status**: Current status (todo, in-progress, done)
- **createdAt**: Date and time when the task was created
- **updatedAt**: Date and time when the task was last updated

## Data Storage

Tasks are stored in a `tasks.json` file in the project directory.

## Technologies Used

- Node.js
- File System (fs) module
- JSON for data persistence

## Future Improvements

- Error handling for invalid commands
- Task priorities
- Search functionality
- Better date formatting
- Color-coded output