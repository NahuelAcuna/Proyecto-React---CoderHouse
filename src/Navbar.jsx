import './index.css'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_logo">
                    <div>
                        <FontAwesomeIcon icon="fa-box" color='green' size='lg' className="icon"/>
                    </div>
                    <p><a href="index.html">My site</a></p>
                </div>
                <div className="navbar_items">
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contácto</a></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
