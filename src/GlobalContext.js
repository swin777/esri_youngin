import React, { createContext, useState, useLayoutEffect } from 'react';
import { createBrowserHistory } from "history"

const history = createBrowserHistory();
const GlobalContext = createContext({});

const GlobalProvider = (props) => {
    const browserhistory = history;
    const basename = "";
    const [currPathname, setCurrPathname] = useState(basename+window.location.href.split(window.location.host)[1]);
    const [loading, setLoading] = useState(false)

    browserhistory.listen( location => setCurrPathname(location.pathname) )

    return (
        <GlobalContext.Provider value={{ browserhistory, basename, currPathname, setCurrPathname, loading, setLoading}}>
            {props.children}
        </GlobalContext.Provider>
      )
}

export { GlobalContext, GlobalProvider };