import React, {useState} from 'react'

const Menu = () => {

    const [ color, setColor ] = useState('translateX(-100%)');

    const menuToggle = () => {
        if(color == "translateX(-100%"){
            setColor("translateX(0%)");
        }
        else {
            setColor("translateX(-100%)");
        }
    }

    return (
        <div className="menu" style={{ 'transform': color}}>
            MENU
        </div>
    )
}

export default Menu
