import { Link } from "react-router-dom";
import { useState } from "react"

const AllPlayers = ({players}) => {
    const [search, setSearch] = useState("")

    const filteredPlayers = players.filter((player) => {
        return player.name.indexOf(search) !== -1;
    })
    const Search = () => {
        
    
        return (
            <div>
                <label>
                    <input 
                        type="text"
                        name="search"
                        value={search}
                        placeholder="Search"
                        onChange={(event) => {setSearch(event.target.value)}}
                        />
                </label>
            </div>
        )
    }

    return (
        <div >
            <h1>The Players:</h1>
            <Search/>
            {
                search.length > 0 ? 
                    <h4>Viewing {filteredPlayers.length} of {players.length}</h4>
                :
                null
            }
            <ul>
                
                {
                    search.length > 0 ?
                        filteredPlayers.map((player) => {
                            return (
                                <Link key={player.id} to={`/players/${player.id}`}>
                                    <li> {player.name}</li>
                                </Link>
                            )
                        })
                
                    :
                
                    players.map((player) => {
                        return (
                            <Link key={player.id} to={`/players/${player.id}`}>
                                <li> {player.name}</li>
                            </Link>
                        )
                    })
                    
                } 
            </ul>
        </div>
    )
    
}

export default AllPlayers;