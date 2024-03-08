import React, { useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import jack_img from '../../assets/jack.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ setSidebar }) => {

    const [getInput, setgetInput] = useState('')
    const navigate = useNavigate()

    const sidebar_toggle = (e) => {
        setSidebar((prev) => prev === false ? true : false);
    }


    const handelKeyDown = (e) => {
        getInput.length > 0 && e.key === 'Enter' &&  navigate('/search/' + getInput)
    }

    

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img src={menu_icon} alt="" className="menu-icon" onClick={sidebar_toggle} />
                <Link to={`/`}> <img src={logo} alt="" className="logo" /></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" onKeyDown={handelKeyDown}   onChange={(e) => (setgetInput(e.target.value))} value={getInput} required />
                    <Link to={getInput.length > 0 && `/search/${getInput}`} >
                        <img src={search_icon} alt="" />
                    </Link>
                </div>
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={jack_img} alt="" className="user-icon" />
            </div>
        </nav>
    )
}

export default Navbar
