import { Link } from "react-router-dom"

function ListCard(props) {

    const link = `/item/${props.item.id}`

    return (
        <section className='card'>
            <Link to={link}>
                <div>
                    <p><strong>{props.item.title}</strong></p>
                    <p>{props.item.priority}</p>
                </div>
            </Link>
            <button onClick={() => { props.onDelete(props.item.id) }}>x</button>
        </section >
    )
}

export default ListCard