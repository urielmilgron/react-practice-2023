import React from 'react'
import './button.css'
import {NavLink} from 'react-router-dom'


function Button({where, to, text}) {
    console.log(where, to, text)
    return (    
        <NavLink className={where} to={to}>
            {text}
        </NavLink>
    )
}

export default Button
