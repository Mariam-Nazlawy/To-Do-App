import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash,  faSquare } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { useState } from 'react'
import EditTask from './EditTask'



function Task({ task, toggleComplete, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false)

    const handelClickEdit= ()=> (
        setIsEditing(true)
    )

    const handelSubmit = (Updatedtask) => {
        editTask(Updatedtask)
        setIsEditing(false)
    }

    if (isEditing) {
        return <EditTask task={task} handelSubmit={handelSubmit} onCancel={() => setIsEditing(false)} />;
    }


    return (
       <div className="Task">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task)}>{task.title}</p>
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>{handelClickEdit()}} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>{deleteTask(task._id)}}/>
            <FontAwesomeIcon className="square-icon" icon={faSquare} onClick={() => toggleComplete(task)} />
       </div>
    )
}


Task.propTypes = {
    task: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func,
    deleteTask: PropTypes.func,
    editTask: PropTypes.func
}
export default Task