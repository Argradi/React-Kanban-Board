import { useState } from 'react'
import kanban from '../../data/kanban.json'
import ListCard from './ListCard'
import './List.css'

function List () {

    const [list, setList] = useState(kanban)

    const toDo = list.filter((item) => {
        return item.status === 'Done'
    })

    const deleteItem = (itemId) => {
        setList(toDo.filter((item) => {
            return item.id !== itemId
        }))
    }

    return (
        <div className='list-container'>
            <h3>Done</h3>
            {toDo.map((item) => {
                return (
                    <ListCard
                        key={item.id}
                        item={item}
                        onDelete={deleteItem}
                    />
                )
            })}
        </div>
    )
}

export default List