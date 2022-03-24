import { useLocation } from 'react-router-dom'
import Logo from '../../Logo'
import './Marquee.css'

const Marquee = ({ scrolled }) => {
    console.log({ scrolled });
    const { pathname } = useLocation()
    const isHome = pathname === '/'

    // return (
    //     <div class="marquee">
    //         <div class="marquee__inner" aria-hidden="true">
    //             <div><Logo /></div>
    //             <div><Logo /></div>
    //             <div><Logo /></div>
    //             <div><Logo /></div>
    //             <div><Logo /></div>
    //         </div>
    //     </div>
    // )

    if (isHome) {
        return (
            <div className="sticker-marquee">
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <Logo />
            </div>
        )
    }

    // if (scrolled) {
    //     return <div className="sticker-marquee-scrolled">
    //         <Logo />
    //     </div>
    // }

    return <div className="sticker-marquee">
        <Logo />
    </div>

}

export default Marquee