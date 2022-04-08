
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { poems } from '../../../poems/poemArray'
import '../Pages.css'
import './Poems.css'

const Title = ({ poem }) => {
    const { id, title, book, author, url } = poem

    return (
        <div>
            <div className="bold-font">
                <NavLink to={`${url}`} className={({ isActive }) => isActive ? "active-poem" : "poem"}>{title.toUpperCase()}</NavLink></div>
            <p>from <i>{book}</i></p>
            <p>by {author}</p>
        </div>
    )
}

const Sidebar = ({ poems }) => {
    return (
        <div className="poem-sidebar">
            {poems.map(poem => <Title key={poem.id} poem={poem} />)}
        </div>
    )
}

const Content = ({ poem }) => {
    return (
        <div className="poem-content">
            <div>{poem || "<< Select a poem!"}</div>
        </div>
    )
}

const Poems = () => {
    const { poem: poemUrl } = useParams();
    const selectedPoem = poems.find(poem => poem.url === poemUrl)
    const navigate = useNavigate();

    // TODO: This breaks the back button functionality...
    // React.useEffect(() => {
    //     if (!selectedPoem) {
    //         navigate(`${poems[0].url}`);
    //     }
    // })

    return <div className="page">
        <h1>POEMS</h1>
        <br />
        <p>A sampling of poems from books published by Pansy Press.</p><br />
        <br />
        <div className="poems">
            <Sidebar poems={poems} />
            <Content poem={selectedPoem?.body || null} />
        </div>
    </div>
}

export default Poems

