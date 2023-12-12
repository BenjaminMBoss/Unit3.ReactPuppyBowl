import { useState } from "react";


const AddPlayer = ({addPuppy}) => {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("bench")
    const [imageUrl, setImageUrl] = useState("")
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPlayer = {
            name: name,
            breed: breed,
            status: status.target.defaultValue,
            imageUrl: imageUrl
        }
       addPuppy(newPlayer);
    }

    return (
        <div>
            <h1>Add Player Form:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter player's Name"
                        onChange={(event) => {setName(event.target.value)}}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="text"
                        name="breed"
                        value={breed}
                        placeholder="Enter player's Breed"
                        onChange={(e) => {setBreed(e.target.value)}}
                    />
                </label>
                <br/>
                <div >
                Select a status
                <label>
                    <br/>
                    <input
                        type="radio"
                        name="status"
                        value="bench"
                        id="Bench"
                        onChange={(event) => (setStatus(event))}
                    />
                    Bench
                </label>
                <label>
                    <br/>
                    <input
                        type="radio"
                        name="status"
                        value="field"
                        id="Field"
                        onChange={(event) => (setStatus(event))}
                    />
                    Field
                </label>
                <br/>
                </div>
               
                <label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={imageUrl}
                        placeholder="Enter player's Image Url"
                        onChange={(e) => {setImageUrl(e.target.value)}}
                    />
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddPlayer;