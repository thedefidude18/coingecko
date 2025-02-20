import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"
import Switcher from './Switcher'
import "../helper/MobileMenu.css"

function MobileMenu({user, signOut}) {
  return (
    <Menu right>
            <Link to="/">Home</Link>
            <Link to="/"><a href='https://forms.gle/PjEsUKf4Lb7mziPU6' className='text-white text-xs'><button className='text-xs px-3 py-1 bg-slate-700 rounded-lg'>+ List your Rollup</button></a></Link>
            <Link to="/">RaaS</Link>
            <Link to="/">Docs</Link>
            {user?.email && <Link to="/account">Account</Link>}
            {user?.email ? (<button onClick={signOut}>Log Out</button>
            ) : (
            <Link to="/signin">
                Connect
            </Link>)}
        
        <Switcher/>
    </Menu>
  )
}

export default MobileMenu
