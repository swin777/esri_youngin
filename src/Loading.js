import React, {useState, useEffect, useContext} from 'react'
import {GlobalContext} from './GlobalContext';

const Loading = () => {
    const {loading} = useContext(GlobalContext)

    return (
        <div styleName='loading' style={{width:'100%', height:'300%', 
            position:'absolute', top:0, left:0, zIndex:999, backgroundColor:'#ccc', opacity:0.5, display:loading?'block':'none'}}>
            <img src="images/loading.gif" style={{position:'absolute', top:window.innerHeight/2-16, left:window.innerWidth/2-16}}/>
        </div>
    )
}

export default Loading