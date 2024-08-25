import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";
import './task.css' 
import Task from "./Task";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./NavBar";




function TaskWrapper() {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {

        //create task request
        const createTaskEndpoint = "http://localhost:3000/api/tasks"
        try {
            fetch(createTaskEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem('token'),
                },
                body: JSON.stringify({title: task})
            })
        }
        catch (error) {
            console.log(error)
        }

        setTasks([...tasks, { title: task, completed: false ,isEditing: false }])
        console.log(tasks)
    }  
    
    useEffect(() => {
        try {
            const getTasksEndpoint = "http://localhost:3000/api/tasks"
        
            fetch(getTasksEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer '+localStorage.getItem('token')
                },
            }).then(res => res.json()).then(data => {
                setTasks(data.tasks) 
                console.log(data.tasks)
            })

    
        }
        catch (error) {
            console.error(error)
        }   
    },[])

    const toggleComplete = (task) => {
        setTasks(
            tasks.map((todo) =>
            todo._id === task._id ? { ...todo, completed: !todo.completed,} : todo)   
        )  
        
        try {
            const completeTaskEndpoint = `http://localhost:3000/api/tasks/${task._id}/complete`
            fetch(completeTaskEndpoint, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({completed: !task.completed})
            })
        }
        catch (error) {
            console.log(error)
            alert("An error occured")
        }
    }
        
    const deleteTask = (id) => {
        // delete requst 
        try {
            const deleteTaskEndpoint = `http://localhost:3000/api/tasks/${id}`
            fetch(deleteTaskEndpoint, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem('token')
                },
            }).then(res => res.json()).then(() => {
                    setTasks(tasks.filter((task) => task._id !== id))
                    toast.success("Task deleted successfully!");
                })
        }
        catch (error) {
            alert("An error occured while deleting the task")
            console.log(error)
        }
    }
    const editTask = (updatedTask) => {
        setTasks(tasks.map((todo) => todo._id === updatedTask._id ? updatedTask : todo))

        try {
                const editTaskEndpoint = `http://localhost:3000/api/tasks/${updatedTask._id}`
                fetch(editTaskEndpoint, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify(updatedTask)
                }
                ).then(res => {
                    res.json()
                    res.status === 201? toast.success("Task edited successfully!"): toast.error("Updating faild")
                }).then((data) => {
                 console.log(`data from the backend: ${data}`)
                })
                
            }
        catch (error) {
            console.log(error)
            alert("An error occured")
        }
    
    }

    return (
        <div className="task-manager">
            <NavBar page={'task'} />
            <div className="TaskWrapper">
                <h1><b>Get your tasks done!</b></h1>
                <TaskForm addTask={addTask} />

                {tasks.map((task, index) => 
                (   <Task task={task} key={index}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    editTask={editTask}/>)
                )}
                <ToastContainer />
            </div>   
        </div>   
    )
}
export default TaskWrapper