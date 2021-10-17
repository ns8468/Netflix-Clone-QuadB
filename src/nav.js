import React, {useState, useEffect} from 'react'
import './nav.css'



function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } 
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll",transitionNavbar);
    }, [])


    return (
        <div className= {`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                
                <img className="nav_avatar" src="https://th.bing.com/th/id/OIP.WQtvVSX_upiNrA-gk9TEpAAAAA?pid=ImgDet&rs=1" alt="" />
            </div>
        </div>
    )
}

export default Nav
