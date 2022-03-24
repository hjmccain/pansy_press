import Marquee from "./Marquee"
import Menu from "./Menu"

const Header = ({ scrolled }) => {
    return (
        <div className="header">
            {/* <div className={scrolled ? "header-scrolled" : "header"}> */}
            <Marquee scrolled={scrolled} />
            <Menu scrolled={scrolled} />
        </div>
    )
}

export default Header