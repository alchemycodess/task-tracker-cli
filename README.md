# Task Tracker CLI

A simple command-line todo application built with Node.js.  
Manage your daily tasks directly from the terminal with ease.

---

## Features
- Add, update, and delete tasks  
- Mark tasks as **todo**, **in-progress**, or **done**  
- List all tasks or filter by status  
- Persistent storage using a JSON file  

---

## Installation
```bash
git clone https://github.com/alchemycodess/task-tracker-cli-project.git
cd task-cli-project
Usage
Add a task

bash
Copy code
node index.js add "Buy groceries"
List all tasks

bash
Copy code
node index.js list
Mark a task as done

bash
Copy code
node index.js mark-done 1
Delete a task

bash
Copy code
node index.js delete 1
Built With
Node.js

File System (fs) module

JSON for storage