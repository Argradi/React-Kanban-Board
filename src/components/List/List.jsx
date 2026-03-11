import { useState } from 'react'
import kanban from '../../data/kanban.json'
import ListCard from './ListCard'
import './List.css'

function List () {

    const [list, setList] = useState(kanban)

    const deleteItem = (itemId) => {
        setList(list.filter((item) => {
            return item.id !== itemId
        }))
    }

    return (
        <div id='list-container'>
            {list.map((item) => {
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