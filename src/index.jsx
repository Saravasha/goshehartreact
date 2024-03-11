// import RemovePerson from './components/RemovePerson.jsx';
import React from 'react';
import AddPerson from './components/AddPerson'
import Footer from './Layout/Footer.jsx'
import Header from './Layout/Header.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PeopleList from '//components/PeopleList.jsx'

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<PeopleList/>}/> */}
        <Route path="/" element={<PeopleList/>}/>
        {/* <Route path="/" element={<SortPeopleList/>}/> wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*/}
        <Route path="/create" element={<AddPerson/>}/>
        </Routes>


      <Header/>
      {/* <PeopleList/> */}
      <Footer/>
      </BrowserRouter>
    </div>
  );
}