import { NavLink, Outlet } from "react-router-dom";

const navLinks = ['Home', 'Popular', 'Battle']

const Nav = () => {
    return (
        <>
            <ul className="nav">
                {navLinks.map((navLink, index) => (
                    <li key={index}><NavLink className='menu' to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>{navLink}</NavLink></li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}

export default Nav