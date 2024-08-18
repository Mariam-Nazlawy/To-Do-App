import PropTypes from 'prop-types'
import { useState } from 'react'
import './edit-task.css'


function EditTask({ task, handelSubmit, onCancel}) {

    const [updatedTask, setUpdatedTask] = useState(task)
    // _id: task._id,
    // title: task.title,
    // description: task.description,
    // dueDate: task.dueDate,
    // priority: task.priority,

    const handleChange = (e) => {

        const { name, value } = e.target;
        setUpdatedTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(`the updated task from the Edit Task Form: ${updatedTask}`)
        handelSubmit(updatedTask)
    }

    return (
        <form onSubmit={onSubmit} className="EditTaskForm">
            <div className="form-group">
                <label className='label'>Title:</label>
                <input
                    name='title'
                    type="text"
                    value={updatedTask.title}
                    placeholder="Title"
                    onChange={handleChange}
                />
            </div> 
            <div className="form-group">
                <label className='label'>Description:</label>
                <input
                    name='description'
                    type="text"
                    value={updatedTask.description}
                    placeholder="Description"
                    onChange={handleChange}
                />
            </div>    
            <div className="form-group">
                <label className='label'>Due Date:</label>
                <input
                    name='dueDate'
                    id="dueDate"
                    type="date"
                    value={updatedTask.dueDate}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label className='label'>Priority:</label>
                <select
                    name='priority'
                    id="priority"
                    value={updatedTask.priority}
                    onChange={handleChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button type="submit" className='save-btn'>Save</button>
            <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
        </form>
    );
}

EditTask.propTypes = {
    task: PropTypes.object,
    handelSubmit: PropTypes.func,
    onCancel: PropTypes.func
}
export default EditTask