import React, {useState, useEffect, useContext} from 'react'
import {LandInfoContext} from './LandInfoContext';

const Header = () => {
    const {workType, setWorkType, selectAddr} = useContext(LandInfoContext);

    return (
        <>
            <ul className="panel_tabs">
              <li className={workType==='total' ? 'active' : ''} onClick={_ => setWorkType('total')}>종합 정보</li>
              <li className={workType==='land' ? 'active' : ''} onClick={_ => setWorkType('land')}>토지 정보</li>
              <li className={workType==='building' ? 'active' : ''} onClick={_ => setWorkType('building')}>건축물 정보</li>
              <li className={workType==='landPlan' ? 'active' : ''} onClick={_ => setWorkType('landPlan')}>토지 이용 계획 현황</li>
            </ul>
            <div className="box">
              <label>지번 주소</label>
              <input type="text" className="W250" readOnly  value={selectAddr ? selectAddr.jibunAddr :''} title={selectAddr ? selectAddr.jibunAddr :''}/>
              <label>도로명 주소</label>
              <input type="text" className="W250"  readOnly  value={selectAddr ? selectAddr.roadAddrPart1 :''} title={selectAddr ? selectAddr.roadAddrPart1 :''}/>
              <label>우편번호</label>
              <input type="text" className="W100"  readOnly  value={selectAddr ? selectAddr.zipNo :''} title={selectAddr ? selectAddr.zipNo :''}/>
            </div>
        </>
    )
}

export default Header