import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function AddPerson() {

    const navigate = useNavigate()
    const [cities, setCities] = useState([]);
    const [person, setPerson] = useState({
        name: "",
        phonenumber: "",
        cityid: 0,
    });
    
    let mounted = true
    useEffect(() => {
        function getData() {
            axios.get(`https://localhost:7094/api/react/create`)
                .then(result => {
                    setCities(result.data);
                    console.log("cities = ", cities)
                })
        }
        getData();
        return () => (mounted = false)
    }, [])


    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
        console.log("person = ", person);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(person);
        setPerson({
            name: this.state.name,
            phonenumber: this.state.phonenumber,
            cityid: this.state.city.value
        });
    }

    async function CreatePerson() {
        console.log(person)
        await axios.post(`https://localhost:7094/api/react/create`, person).then(response => response.status 
        // console.log(response.status);}
        )
        navigate('/')
    }

    return (
        <div className='container'>
            <h3 className='col'>Add Dudes Form</h3>
            <div className='col'>

                <form onSubmit={handleSubmit}>
                        <label className='col-lg-4 col-mg-4'>Name: &nbsp;</label>
                    <div >
                        <input className='col-lg-4 col-mg-4' type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    </div>
                        <label className='col-lg-4 col-mg-4'>Phone Number: &nbsp;</label>
                    <div >
                        <input className='col-lg-4 col-mg-4' type="text" name="phonenumber" placeholder='Phone Number' onChange={handleChange} required />
                    </div>
                        <label className='col-lg-4 col-mg-4'>City Id: &nbsp;</label>
                    <div >
                        <select className='col-lg-4 col-mg-4' type="text" name="cityid" defaultValue={"default"} onChange={handleChange} required >
                            <option disabled value={"default"} required>Select City</option>
                            {cities.map((city) => <option key={city.value} value={city.value}>{city.text}</option>)}
                        </select>
                    </div>
                    <ol className='row table'>
                    </ol>
                        <button type="submit" className='btn btn-primary col-lg-4 col-mg-4' onClick={() => CreatePerson()}>Create Person</button>
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
}
