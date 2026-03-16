import ListCard from './ListCard'
import './List.css'

function List (props) {
    return (
        <div className='list-container'>
            <h3>To Do</h3>
            {props.toDo.map((item) => {
                return (
                    <ListCard
                        key={item.id}
                        item={item}
                        onDelete={props.onDelete}
                    />
                )
            })}
        </div>
    )
}

export default List