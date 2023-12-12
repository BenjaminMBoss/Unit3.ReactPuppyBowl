import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/players">Players</Link>
            <Link to="/addplayer">Add Player</Link>
        </nav>
    )
}

export default NavBar;