import ListCard from './ListCard'
import './List.css'

function List (props) {
    return (
        <div className='list-container'>
            <h3>Done</h3>
            {props.done.map((item) => {
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