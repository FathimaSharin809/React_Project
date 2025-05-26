import React from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Posters from "./Components/Posters/Posters";
import {originals, actions, romance, horror, documentaries, comedy} from './url'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Posters url={originals} title="Netflix Originals"/>
      <Posters url={actions} title="Action" isSmall/>
      <Posters url={comedy} title="Comedy" isSmall/>
      <Posters url={horror} title="Horror" isSmall/>
      <Posters url={romance} title="Romance" isSmall/>
      <Posters url={documentaries} title="Documentary" isSmall/>
    </div>
  );
}

export default App;
