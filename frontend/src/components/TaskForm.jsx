import '../pages/task.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function TaskForm({addTask}) {

    const [task, setTask] = useState()

    const SubmitForm = (e) => {
        e.preventDefault()
        addTask(task)
        setTask("")
    }

    return (
        <form className="TaskForm" onSubmit={SubmitForm}>
            <input type="text" className="task-input"
             onChange={e => {setTask(e.target.value)} } value={task}  placeholder="write the task" />
            <button className="task-btn" type="submit">Add Task</button>

        </form>
    )
}
TaskForm.propTypes = {
    addTask: PropTypes.func
}
export default TaskForm