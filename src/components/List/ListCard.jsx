function ListCard(props) {

    return (
        <section className='card' key={props.item.id}>
            <p><strong>{props.item.title}</strong></p>
            <p>{props.item.priority}</p>
            <button onClick={() => { props.onDelete(props.item.id) }}>X</button>
        </section>
    )
}

export default ListCard