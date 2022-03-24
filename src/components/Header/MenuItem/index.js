import { NavLink } from "react-router-dom";
import './MenuItem.css'

const MenuItem = ({ children, url }) => {
    return (
        <div>
            <NavLink to={`/${url}`} className={({ isActive }) => {
                return isActive ? "active-menu-item" : "menu-item"
            }}
            >
                {children}
            </NavLink>
        </div>
    )
}

export default MenuItem