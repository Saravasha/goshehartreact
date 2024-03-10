import React from 'react';
import axios from 'axios';

export default function Person(props) {

    const person = props.person
    console.log("person props = ", person);

    async function DeletePerson(props) {

        
        await axios.delete(`https://localhost:7094/api/react/${props}`)
        .then(response => response.data)
        console.log("props = ", props);

    }

    return (
        <div className='container'>
            <div className='row'>
                <b className='col'>Name</b>
                <b className='col'>Phone Number</b>
                <b className='col'>Residence (City)</b>
                <b className='col'>Country</b>
                <b className='col'></b>
            </div>
            <div className='row'>
                <div className='col'>
                    <p>{person.name}</p>
                </div>
                <div className='col'>
                    <p>{person.phoneNumber}</p>
                </div>
                <div className='col'>
                    <p>{person.city.name}</p>
                </div>
                <div className='col'>
                    <p>{person.city.country.name}</p>
                </div>
                <div className='col'>
                    <button className="btn btn-danger btn-sm" onClick={() => DeletePerson(person.id)}>Delete</button>
                </div>
            </div>
        </div>
    
    )

}
