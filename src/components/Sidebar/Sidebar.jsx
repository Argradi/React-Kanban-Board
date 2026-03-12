import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div id="sidebar-container">
            <nav className="sidebar-nav">
                <Link to='/'>Home</Link>
            </nav>
            <nav className="sidebar-nav">
                <Link>Add task</Link>
            </nav>
            <nav className="sidebar-nav">
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default Sidebar