import ToDoList from '../components/List/ToDoList'
import InProgressList from '../components/List/InProgressList'
import DoneList from '../components/List/DoneList'

function DashboardPage () {
    return (
        <div className="page-container" id='dashboard'>
            <ToDoList></ToDoList>
            <InProgressList></InProgressList>
            <DoneList></DoneList>
        </div>
    )
}

export default DashboardPage