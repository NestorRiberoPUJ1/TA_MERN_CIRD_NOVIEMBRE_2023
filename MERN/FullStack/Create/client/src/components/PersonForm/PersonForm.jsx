'use client'
import axios from "axios";
const { Fragment, useState } = require("react")




const PersonForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleNewPerson = async (e) => {
        e.preventDefault();
        try {
            const data = {
                firstName,
                lastName
            }
            const response = await axios.post("http://localhost:8000/api/person", data);
            const result = await response.data;
            console.log(result);
            setFirstName("");
            setLastName("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleNewPerson}>
                <div>
                    <label htmlFor="">Firstname</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Lastname</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </Fragment>
    )
}

export default PersonForm;