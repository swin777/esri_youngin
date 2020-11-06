import React, { useContext, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {GlobalContext} from 'GlobalContext';
import Top from './components/Top';
import Home from './components/home'
import LandInfo from './components/landInfo'
import AerialVideo from './components/aerialVideo'
import DataService from './components/dataService'

const App = () => {
  const {browserhistory, basename, setCurrPathname} = useContext(GlobalContext);

  browserhistory.listen((location, action) => {
    setCurrPathname(location.pathname)
  })

  return (
    <div>
      <LandInfo/>
    </div>
  );
}

export default App;
