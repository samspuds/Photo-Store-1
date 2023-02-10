import React from "react"
import {Link} from "react-router-dom"

function Header(){
    return (
            <nav>
                <Link to="/Photos"><h2>Take your pic</h2></Link>
                <Link to="/Cart"><h2>Cart</h2></Link>
            </nav>

    )
}

export default Header