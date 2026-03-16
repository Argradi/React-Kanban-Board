import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddItemPage (props) {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [assignee, setAssignee] = useState('')
    const [status, setStatus] = useState('To Do')
    const [priority, setPriority] = useState('Low')
    const [createdDate, setCreatedDate] = useState('')
    const [dueDate, setDueDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            title: title,
            description: description,
            assignee: assignee,
            status: status,
            priority: priority,
            createdDate: createdDate,
            dueDate: dueDate
        }

        props.onCreate(newItem)

        navigate("/")
    }

    return(
        <div className="page-container" id="add-item">
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label>
                    Assignee:
                    <input
                        type="text"
                        value={assignee}
                        onChange={(e) => {setAssignee(e.target.value)}}
                    />
                </label>

                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="To Do">To Do</option>
                    </select>
                </label>

                <label>
                    Priorirty:
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>

                <label>
                    CreatedDate:
                    <input
                        type="date"
                        value={createdDate}
                        onChange={(e) => {setCreatedDate(e.target.value)}}
                    />
                </label>

                <label>
                    DueDate:
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => {setDueDate(e.target.value)}}
                    />
                </label>

                <button>Create</button>
            </form>
        </div>
    )
}

export default AddItemPage