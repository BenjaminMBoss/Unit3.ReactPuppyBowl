import { useParams, Link } from "react-router-dom";

function SinglePlayer ({players, deletePuppy}) {
    const params = useParams();
    const id = params.id * 1;

    const singlePlayer = players.find((player) => {
        return player.id === id;
    })
    
    if (!singlePlayer) {
        return null;
    }
    
    const handleDelete = async () => {
        deletePuppy(singlePlayer)
    }
    return (
        <div>
            <h1> {singlePlayer.name}</h1>
            <h3> {singlePlayer.breed}</h3>
            <img src={singlePlayer.imageUrl}></img>
            <br/>
            <Link to="/players"> Back to all players</Link>
            <hr/>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default SinglePlayer;