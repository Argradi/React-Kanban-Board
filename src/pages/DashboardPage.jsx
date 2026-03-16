import ToDoList from '../components/List/ToDoList'
import InProgressList from '../components/List/InProgressList'
import DoneList from '../components/List/DoneList'

function DashboardPage (props) {
    
    return (
        <div className="page-container" id='dashboard'>
            <ToDoList toDo={props.toDo} onDelete={props.onDelete}></ToDoList>
            <InProgressList inProgress={props.inProgress} onDelete={props.onDelete}></InProgressList>
            <DoneList done={props.done} onDelete={props.onDelete}></DoneList>
        </div>
    )
}

export default DashboardPage