import axios from "axios"
import { useState } from "react";

const AUTH_URL = 'https://fsa-jwt-practice.herokuapp.com/authenticate'

function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick () {
        try {
            const response = await axios.get(AUTH_URL, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            const result = response.data
            setSuccessMessage(result.message)
        } catch (error) {
            console.log(error.message)
        }
        
    }


    return (
        <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
        </div>

    )

}

export default Authenticate