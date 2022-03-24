import MenuItem from '../MenuItem'
import '../Header.css'

const Menu = ({ scrolled }) => {
    console.log({ scrolled });
    const menuItems = <div>
        <MenuItem url="poems">
            read our poems
        </MenuItem>
        <MenuItem url="submit">
            submit!
        </MenuItem>
        <MenuItem url="events">
            events
        </MenuItem>
        <MenuItem url="about">
            about pansy
        </MenuItem>
    </div>

    return (
        <>
            <span className={scrolled ? "menu-scrolled visible" : "menu-scrolled hidden"}>
                {menuItems}
            </span>
            <span className={scrolled ? "menu hidden" : "menu visible"}>
                {menuItems}
            </span>
        </>
    )

    // return (
    //     <span className="menu-scrolled">
    //         {menuItems}
    //     </span>
    // )
}

export default Menu