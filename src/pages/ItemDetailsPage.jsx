import { useParams } from "react-router-dom";
import itemData from "../data/kanban.json";

function ItemDetailsPage () {

    const {itemId} = useParams()
    const itemDetail = itemData.find((item) => item.id === itemId)
    console.log(itemId)

    return(
        <div className="page-container">
            <h1>Item detail {itemDetail.id}</h1>
        </div>
    )
}

export default ItemDetailsPage