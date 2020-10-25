import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {GlobalContext} from '../GlobalContext';

const Top = () => {
  const {basename, currPathname, setLoading} = useContext(GlobalContext);
  let history = useHistory();

  return (
      <div id="haeder" className="fullframe ">
        <div className="contentFrame">
          <ul id="nav">
            <li className={currPathname===basename+'/' ? 'active' : ''} onClick={_ => {setLoading(false); history.push(basename+"/")}}>HOME</li>
            <li className={currPathname===basename+'/landInfo' ? 'active' : ''} onClick={_ => {setLoading(false); history.push(basename+"/landInfo")}}>토지정보</li>
            <li className={currPathname===basename+'/aerialVideo' ? 'active' : ''} onClick={_ => {setLoading(false); history.push(basename+"/aerialVideo")}}>항공영상 서비스</li>
            <li className={currPathname===basename+'/dataService' ? 'active' : ''} onClick={_ => {setLoading(false); history.push(basename+"/dataService")}}>데이터 제공</li>
          </ul>
        </div>
      </div>
  )
}

export default Top