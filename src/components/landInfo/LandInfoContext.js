import React, { createContext, useState } from 'react';
import { createBrowserHistory } from "history"
import axios from 'axios';

window._axios_ = axios

const history = createBrowserHistory();
const LandInfoContext = createContext({});

const LandInfoProvider = (props) => {
    const [workType, setWorkType] = useState('total') //'total':종합정보 'land':토지정보, 'building':건축물정보, 'landPlan':토지이용계획현황
    const confmKey = 'U01TX0FVVEgyMDE3MDgyNDEwMzcyNDIzOTk3' //주소검색 키
    const serviceKey = 'HRMJ2Um1XH3yWfvY6k6uewlcR8P/rH5H7/Fb9vUrjq4nmq09uSRsCjmikxdzrFDvcG/MzStcnsEnm4maDpZ/KA==' //api.data.go.kr 서비스키
    const key = 'W0JANWFhNDFjYWQ' //W0JAN2lwZjkyMWQ
    const [landInfo, setLandInfo] = useState({})
    const [buildingInfo, setBuildingInfo] = useState({'getBrBasisOulnInfo':[], 'getBrRecapTitleInfo':{}, 'getBrTitleInfo':[], 'getBrFlrOulnInfo':[]})
    const [selectAddr, setSelectAddr] = useState()

    const serverCall = (url, method, data, params) => {
        return new Promise((resolve, reject) => {
            axios({ url:url, method:method, data:data, params:params, headers:{}, credentials:true}).then(res => { resolve(res) }).catch(err => reject(err))
        })
    }

    const restApi = {
        addrLinkApi: (keyword) => {
            return serverCall(`/jusoGoKr/addrlink/addrLinkApi.do`, 'post', null, {'keyword':keyword, 'confmKey':confmKey, pageNo:1, countPerPage:50, 'resultType':'json' })
        },

        // ladfrlService: (pnu) => {
        //     return serverCall(`/dataGoKR2/1611000/nsdi/eios/LadfrlService/ladfrlList.xml?`, 'get', null, {'pnu':pnu, 'key':key, numOfRows:50})
        // }, 
        
        ladfrlService: (pnu) => {
            return serverCall(`/dataGoKR2/bsns/api/selectApiData.do`, 'get', null, {'pnu':pnu, 'key':key, 'target':'totInfo', 'type':'attr'})
        }, 

        getBrBasisOulnInfo: (param) => {
            return serverCall(`/dataGoKR2/1611000/BldRgstService/getBrBasisOulnInfo?`, 'get', null, {...param, 'key':key, numOfRows:200})
        },

        getBrRecapTitleInfo: (param) => {
            return serverCall(`/dataGoKR2/1611000/BldRgstService/getBrRecapTitleInfo?`, 'get', null, {...param, 'key':key})
        },

        getBrTitleInfo: (param) => {
            return serverCall(`/dataGoKR2/1611000/BldRgstService/getBrTitleInfo?`, 'get', null, {...param, 'key':key, numOfRows:200})
        },

        getBrFlrOulnInfo: (param) => {
            return serverCall(`/dataGoKR2/1611000/BldRgstService/getBrFlrOulnInfo?`, 'get', null, {...param, 'key':key, numOfRows:200})
        }
    } 

    return (
        <LandInfoContext.Provider value={{workType, setWorkType, restApi, landInfo, setLandInfo, buildingInfo, setBuildingInfo, selectAddr, setSelectAddr}}>
            {props.children}
        </LandInfoContext.Provider>
      )
}

export { LandInfoContext, LandInfoProvider };