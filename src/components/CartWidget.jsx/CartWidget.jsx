import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
    return (
        <div class="icon">
            <FontAwesomeIcon icon={ faCartShopping } />
        </div>
    )
}
