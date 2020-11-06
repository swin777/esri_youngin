import React, {useState, useEffect, useContext} from 'react'
import {LandInfoContext} from './LandInfoContext'
import {GlobalContext} from '../../GlobalContext'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import {makePnu, xml2Json, addressToBldPram, emptyDisplay} from '../Common'
import {dongInfo} from '../../Config'
import _, { isNull } from 'lodash'

const Search = () => {
    const {setLoading} = useContext(GlobalContext)
    const {restApi, selectAddr, setSelectAddr,setLandInfo, setBuildingInfo} = useContext(LandInfoContext);
    const [visible, setVisible] = useState(true)
    const [mode, setMode] = useState('total') //'total':통합검색, 'jibun':지번검색
    const [totalKeyWord, setTotalKeyWord] = useState('')
    const [totalAddrs, setTotalAddrs] = useState()
    const [jibunAddrs, setJibunAddrs] = useState()
    const [rTotalKeyWord, setRTotalKeyWord] = useState('')
    const [selGu, setSelGu] = useState(null)
    const [selDong, setSelDong] = useState(null)
    const [mtYn, setMtYn] = useState(0)
    const [lnbrMnnm, setLnbrMnnm] = useState('')
    const [lnbrSlno, setLlnbrSlno] = useState('')
    const [rJibunKeyWord, setRJibunKeyWord] = useState('')

    const getSearch = async(keyWord) => { //주소검색서비스 호출
        setLoading(true)
        setLandInfo({})
        if(mode==='total'){
            setJibunAddrs(null); setSelGu(null); setSelDong(null); setMtYn(0); setLnbrMnnm(''); setLlnbrSlno(''); setRJibunKeyWord('')
        }else{
            setTotalAddrs(null); setTotalKeyWord(''); setRTotalKeyWord('')
        }
        
        let res = await restApi.addrLinkApi(keyWord).catch(err=>{setLoading(false); alert('주소검색실패')})
        if(res.data && res.data.results.juso){
            mode==='total' ? setRTotalKeyWord(`'${keyWord}'`) : setRJibunKeyWord(`'${keyWord}'`)
            let addrList = _.chain(res.data.results.juso).map((a, i)=>{return {...a, 'pnu':makePnu(a)}}).uniqBy('pnu').value()
            mode==='total' ? setTotalAddrs(addrList) : setJibunAddrs(addrList)
            if(addrList.length>0) setSelectAddr(addrList[0])
        }
        setLoading(false)
    }

    useEffect(()=>{ 
        setLandInfo({})
        setBuildingInfo({'getBrBasisOulnInfo':[], 'getBrRecapTitleInfo':[], 'getBrTitleInfo':[], 'getBrFlrOulnInfo':[]})
        if(selectAddr){
            serviceCall()
        }
    },[selectAddr])

    const serviceCall = async() => { //토지정보, 건축물정보(들) 여러서비스 동시호출
        setLoading(true)
        restApi.ladfrlService(selectAddr.pnu)
        .then(res=>{
            let info = xml2Json(res.data)
            if(info && info.fields && info.fields.ladfrlVOList){
                setLandInfo(info.fields.ladfrlVOList)
            }
            setLoading(false)
            alert(res.data.totinfo.jibunNm)
        })
        .catch(err=>{setLoading(false); alert('토지검색실패')})
        let bldParam = addressToBldPram(selectAddr)

        let callArr = [
            await restApi.getBrBasisOulnInfo(bldParam), 
            await restApi.getBrRecapTitleInfo(bldParam), 
            await restApi.getBrTitleInfo(bldParam),
            await restApi.getBrFlrOulnInfo(bldParam),
        ]
        Promise.allSettled(callArr).then(result => {
            let resBldInfo = {getBrBasisOulnInfo:[], getBrRecapTitleInfo:[], getBrTitleInfo:[], getBrFlrOulnInfo:[]}
            result.forEach(res => {
                if (res.status==='fulfilled') {
                    if(res.value && res.value.data){
                        let serviceName = res.value.config.url.split('/dataGoKR/1611000/BldRgstService/')[1].replace('?', '')
                        resBldInfo[serviceName] = Array.isArray(res.value.data.response.body.items.item) ? res.value.data.response.body.items.item : [res.value.data.response.body.items.item]
                    }
                }
            })
            setBuildingInfo(resBldInfo)
            setLoading(false)
        })
    }

    return (
        <div style={{position: 'absolute', left: '0px', top:'0px'}}>
            <div id="lnb_btn">
            <div className="off" style={{display:visible ? 'block' : 'none'}} onClick={_ => setVisible(false)}/>
            <div className="on" style={{display:!visible ? 'block' : 'none'}} onClick={_ => setVisible(true)}/>
            </div>
            <div className="lnb" style={{display:visible ? 'block' : 'none'}}>
            <ul className="tabs">
                <li onClick={_ => setMode('total')} className={mode==='total' ? 'active' : ''}>통합검색</li>
                <li onClick={_ => setMode('jibun')} className={mode==='jibun' ? 'active' : ''}>지번검색</li>
            </ul>
            <div className="tab_wrap">
                <div id="tab1" className="tab_content" style={{display:mode==='total' ? 'block' : 'none'}}>
                    <div className="box">
                        <input type="text" className="W290" title="검색어 입력" onChange={e=>setTotalKeyWord(e.target.value)} value={totalKeyWord}/>
                        <a className="search" href="#" onClick={e=>{e.preventDefault(); getSearch(totalKeyWord)}}/>
                        <p>예) 건물명(경기도청), 도로명(효원로), 지번(매산로3가 1)</p>
                    </div>
                    <hr />
                    <h3><span>주소</span> 검색결과</h3>
                    <p className="result_txt"><em>{rTotalKeyWord}</em>검색결과</p>
                    <table className="st1 fullFrame"> 
                    </table>
                    <div style={{height:200}}>
                    <OverlayScrollbarsComponent style={{ height: 200 }}>
                        {totalAddrs && totalAddrs.map((addr) => 
                            <ul key={addr.pnu} style={{backgroundColor : selectAddr && selectAddr.pnu===addr.pnu ? '#eadefc' : '#fff'}} onClick={_=>setSelectAddr(addr)}>
                                <li style={{padding:'13px 0 13px 20px',borderBottom:'1px solid #e1e1e1', fontSize:14}}>{addr.roadAddr}</li>
                            </ul>
                        )}
                    </OverlayScrollbarsComponent>
                    </div>
                </div>
                <div id="tab2" className="tab_content" style={{display:mode==='jibun' ? 'block' : 'none'}}>
                    <div className="box">
                        <div>
                            <label style={{display: 'none'}}>시군구 선택</label>
                                <select className="W170" onChange={e=>setSelGu(dongInfo.filter(a=>a.name===e.target.value)[0])}>
                                    <option value={null} selected={selGu===null}>시/군/구</option>
                                    {dongInfo.map(info=>
                                        <option key={info.name} value={info.name}>{info.name}</option>
                                    )}
                                </select>
                            <label style={{display: 'none'}}>읍면동 선택</label>
                                <select className="W170" onChange={e=>setSelDong(selGu.dongs.filter(a=>a.name===e.target.value)[0])}>
                                    <option value={null} selected={selDong===null}>읍/면/동</option>
                                    {selGu && selGu.dongs.map(info=>
                                        <option key={info.name} value={info.name} selected={selDong&&info.name===selDong.name}>{info.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="MgT5">
                            <label style={{display: 'none'}}>선택항목 선택</label>
                            <select className="W100" onChange={e=>setMtYn(e.target.value)} value={mtYn}>
                                <option value={0} value={mtYn===0}>대지</option>
                                <option value={1} value={mtYn===1}>산</option>
                            </select>
                            <input type="text" className="W80" title="검색어 입력" onChange={e=>setLnbrMnnm(e.target.value)} value={lnbrMnnm}/> -
                            <input type="text" className="W80" title="검색어 입력" onChange={e=>setLlnbrSlno(e.target.value)} value={lnbrSlno}/>
                            <a className="search" href="#" 
                                onClick={e=>{e.preventDefault(); getSearch(`${selGu.name} ${selDong.name} ${lnbrMnnm?lnbrMnnm:''}-${lnbrSlno?lnbrSlno:''}`)}}/>
                        </div>
                    </div>
                    <hr />
                    <h3><span>주소</span> 검색결과</h3>
                    <p className="result_txt"><em>{rJibunKeyWord}</em>검색결과</p>
                    <table className="st1 fullFrame"> 
                    </table>
                    <div style={{height:200}}>
                    <OverlayScrollbarsComponent style={{ height: 200 }}>
                        {jibunAddrs && jibunAddrs.map((addr) => 
                            <ul key={addr.pnu} style={{backgroundColor : selectAddr && selectAddr.pnu===addr.pnu ? '#eadefc' : '#fff'}} onClick={_=>setSelectAddr(addr)}>
                                <li style={{padding:'13px 0 13px 20px',borderBottom:'1px solid #e1e1e1', fontSize:14}}>{addr.roadAddr}</li>
                            </ul>
                        )}
                    </OverlayScrollbarsComponent>
                    </div>
                </div>
            </div>
            <p className="view_tip">지도에서 확인하고자 하는 필지를 클릭하시면 <em>상세정보가 조회</em>됩니다.</p>
            </div>
        </div>
    )
}

export default Search