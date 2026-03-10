import './Sidebar.css'

function Sidebar() {
    return (
        <div id="sidebar-container">
            <nav className="sidebar-nav">
                <a>Home</a>
            </nav>
            <nav className="sidebar-nav">
                <a>Add task</a>
            </nav>
            <nav className="sidebar-nav">
                <a>About</a>
            </nav>
        </div>
    )
}

export default Sidebar