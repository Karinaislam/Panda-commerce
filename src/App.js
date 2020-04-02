import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComp from './Components/NavbarComp';
import CarouselComp from './Components/CarouselComp';
import Category from './Components/Category';
import ShoeCards from './Components/ShoeCards';
import BagCard from './Components/BagCard';
import Subcribs from './Components/Subcribs';

import {DataProvider} from "./Contex/DataContext"

function App() {
  return (
    <div className="App">
      <DataProvider>
      <NavbarComp></NavbarComp>
     <CarouselComp></CarouselComp>
     <Category></Category>
     <ShoeCards></ShoeCards>
     <BagCard></BagCard>
     <Subcribs></Subcribs>
      </DataProvider>
    
    </div>
  );
}

export default App;
