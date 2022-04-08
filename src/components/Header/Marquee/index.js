import { useLocation } from 'react-router-dom'
import Logo from '../../Logo'
import './Marquee.css'

const Marquee = ({ scrolled }) => {
    const { pathname } = useLocation()
    const isHome = pathname === '/'

    // if (isHome) {
    //     return (
    //         <div class="marquee">
    //             <div class="marquee__inner" aria-hidden="true">
    //                 <div><Logo /></div>
    //                 <div><Logo /></div>
    //                 <div><Logo /></div>
    //                 <div><Logo /></div>
    //                 <div><Logo /></div>
    //             </div>
    //         </div>
    //     )
    // }

    if (isHome) {
        return (
            <div className="sticker-marquee">
                <Logo />
                {/* <Logo />
                <Logo />
                <Logo />
                <Logo /> */}
            </div>
        )
    }

    return (
        <>
            <div className={scrolled ? "sticker-marquee-scrolled visible" : "sticker-marquee-scrolled hidden"}>
                <Logo />
            </div>
            <div className={scrolled ? "sticker-marquee hidden" : "sticker-marquee visible"}>
                <Logo />
            </div>
        </>
    )
}

export default Marquee