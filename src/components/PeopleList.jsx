import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import SortPeopleList from "./SortPeopleList";


export default class PeopleList extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        axios.get('https://localhost:7094/api/react/person/').then(result => {
            const people = result.data;
            this.setState({ people });
            console.log("people = ", people);
        })
    }

    render() {


        return (
            <div className="container">

                <SortPeopleList  people={this.state.people}></SortPeopleList>
                <Link className="btn btn-primary m-1" to={"/Create"}>Create New Person</Link>
            </div>
        )
    }
}
