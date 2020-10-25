import React, { Fragment, useState, useContext, useRef, useEffect } from "react";
import {  useHistory } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext"
import { WebMapView } from '../../components/map/WebMapView';
import Search from './Search'
import Header from './Header'
import Total from './Total'
import Land from './Land'
import Building from './Building'
import LandPlan from './LandPlan'
import {LandInfoProvider} from './LandInfoContext';

const LandInfo = () => {
  return (
    <LandInfoProvider>
      <div id="conts_wrap" className="contentFrame">
          <div className="map">
            <WebMapView/>
            <Search/>
          </div>
          <div id="panel">
            <Header/>
            <div className="panel_wrap">
              <Total/>
              <Land/>
              <Building/>
              <LandPlan/>
            </div>
          </div>
          <div className="notice">* 본 서비스에서 제공하는 있는 지도나 부동산행정자료는 도민들의 편의를 위해 <span>단순 열람조회용으로 제공되는 것으로 재산권이나 부동산거래 등의 법적인 증명서로서의 효력이 없으며,</span> 데이타 오류 등의 이유로 실제 내용과 일치하지 않을 수 있습니다.</div>
        </div>
      </LandInfoProvider>
  );
};
  
export default LandInfo;