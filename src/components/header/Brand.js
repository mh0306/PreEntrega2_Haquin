import brand from "../../img/brand.png";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="mh - eCommerce" title="mh - eCommerce"></img>
        </Link>
    )
}

export default Brand;