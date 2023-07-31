import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Zapatillas deportivas"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Zapatillas urbanas">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Indumentaria">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Accesorios">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

