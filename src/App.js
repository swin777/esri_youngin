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
      <Router history={browserhistory} basename={basename}>
        <Top/>
        <Switch>
          <Route exact path={basename+"/"} component={Home}/>
          <Route path={basename+"/landInfo"} component={LandInfo}/>
          <Route path={basename+"/aerialVideo"} component={AerialVideo}/>
          <Route path={basename+"/dataService"} component={DataService}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
