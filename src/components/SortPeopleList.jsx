import React from "react";
import { useState } from "react";
import Person from "./Person";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { useEffect } from "react";

export default function SortPeopleList(props) {

    const people = props.people

    // setPerson(props.people)
    console.log("props people from PeopleList = ", people);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    function Search(people) {
        return people.filter((person) => {
            if (person.name == filterParam) {
                return searchParam.some((newPerson) => {
                    return (
                        person[newPerson]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newPerson) => {
                    return (
                        person[newPerson]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    useEffect(() => {
    }, []);

    return (
        <div className="container">

        <div className="col">
           <div >
            {/* <h1>{q}</h1> */}
            <h1>Sort by Name</h1>
            <input type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search by Name..."
                onChange={(e) => setQ(e.target.value)}
                value={q}
                /> 
        </div>
           
            <div className="col">
                <h1>People List</h1>
            </div>
            <div className="row">
                {Search(props.people).map((person) =>
                    <Accordion key={person.id}>
                        <AccordionItem>
                            <AccordionHeader className={`accordion-header col-lg-2 col-md-4 btn border-secondary`}>
                                <div>{person.name}</div>
                            </AccordionHeader>
                            <AccordionBody className={`accordion-title`}>
                                <Person key={person.id} person={person}></Person>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                )}
            </div>
            
        </div>
</div>
    )
};


{/* <div className="select">
<select
onChange={(e) => {
    setFilterParam(e.target.value);
}}
className="custom-select"
aria-label="Filter Countries By Countries"
>
<option value="All">Filter By Region</option>
<option value="Africa">Africa</option>
<option value="Americas">America</option>
<option value="Asia">Asia</option>
<option value="Europe">Europe</option>
<option value="Oceania">Oceania</option>
</select>
            <span className="focus"></span>
        </div> */}
        {/* <span className="sr-only">Search countries here</span> */}


    //     <label htmlFor="search-form">
    //     <input
    //         placeholder="Search by Name..."
    //         /* 
    //         // set the value of our useState e
    //         //  anytime the user types in the search box
    //         */
    //        onChange={(e) => setQ(e.target.value)}
    //        />
    // </label>


    // <div>{Search(people).map((person) => (
    //     <article className="card" key={person.id}>
    //         <div className="card-image">
    //             <img src={person.flag} alt={person.name} />
    //         </div>
    //         <div className="card-content">
    //             <h2 className="card-name">{person.name}</h2>
    //             <ol className="card-list">
    //                 <li>
    //                     population:{" "}
    //                     <span>{person.population}</span>
    //                 </li>
    //                 <li>
    //                     Region: <span>{person.region}</span>
    //                 </li>
    //                 <li>
    //                     Capital: <span>{person.capital}</span>
    //                 </li>
    //             </ol>
    //         </div>
    //     </article>
    // ))}
    // </div>