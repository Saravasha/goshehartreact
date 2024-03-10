import React from "react";
import axios from "axios";

export default class RemovePerson extends React.Component {
    state = {
        id: ''
    }

    handleChange = event => {
        this.setState({id: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://localhost:7094/api/react/${this.state.id}`)
        .then(result => {
            console.log(result); 
            console.log(result.data);
        })
    }

    render() {
        return(
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label >Delete a Person&nbsp; 
                    <input type="number" placeholder="Person Id" name="id" required min={0} onChange={this.handleChange}></input>
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }

}