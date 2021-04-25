import React from 'react'
import logo from '../Assets/44_Bitbucket_logo_logos-512.png'

const Navbar = ({children}) => {
    return (
        <div>
       <nav className="navbar">
        
<span className="logo"><img height="30px" src={logo}/>Bitbucket</span>
       </nav>
       <div>
       </div>
       {{...children}}
       </div>
    )
}

export default Navbar
