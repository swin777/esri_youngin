import React, {useState, useEffect, useContext} from 'react'
import {LandInfoContext} from './LandInfoContext'
import {emptyDisplay} from '../Common'
import _ from 'lodash'

const Building = () => {
    const {workType, buildingInfo} = useContext(LandInfoContext);
    const [selBuildingInfo, setSelBuildingInfo] = useState()

    useEffect(()=>{ 
        setSelBuildingInfo(buildingInfo && buildingInfo.getBrBasisOulnInfo && buildingInfo.getBrBasisOulnInfo.length>0 ? buildingInfo.getBrBasisOulnInfo[0] : null)
    },[buildingInfo])

    return (
        <div id="panel_tab3" className="panel_content" style={{display:workType==='building' ? 'block' : 'none'}}>
            <h3>건축물 선택<span>건축물을 선택하여 주세요.</span></h3>
            <div className="box">
            <div className="st2">
                <label style={{display: 'none'}}>건축물 선택</label>
                <select className="W300" onChange={e=>setSelBuildingInfo(buildingInfo.getBrBasisOulnInfo.filter(b=>b.mgmBldrgstPk === e.target.value)[0])}>
                    {buildingInfo && buildingInfo.getBrBasisOulnInfo &&  _.chain(buildingInfo.getBrBasisOulnInfo).uniqBy('mgmBldrgstPk').value().map(brBasisOuln => 
                        <option key={brBasisOuln.mgmBldrgstPk} value={brBasisOuln.mgmBldrgstPk} selected={selBuildingInfo&&brBasisOuln.mgmBldrgstPk===selBuildingInfo.mgmBldrgstPk}>
                            {brBasisOuln.bldNm + '   ' + brBasisOuln.mgmBldrgstPk}
                        </option>
                    )}
                </select>
            </div>
            </div>
            <h3>대장 상세정보<span>대장 상세정보 데이터를 한눈에 확인하세요!</span></h3>
            <h4>건축물 현황</h4>
            <div className="box">
            <table className="st2 MgT5 fullFrame">
                <caption>토지기본사항</caption>
                <colgroup>
                <col style={{width: '33.3%'}} />
                <col style={{width: '33.3%'}} />
                <col />
                </colgroup>
                <tbody>
                <tr>
                    <td>
                    <label>내적설계적용여부</label>
                    <input type="text" className="W200"  readOnly/>
                    </td>
                    <td>
                    <label>내진능력</label>
                    <input type="text" className="W200"  readOnly/>
                    </td>
                    <td>
                    <label>대지위치</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(selBuildingInfo, 'newPlatPlc')} value={emptyDisplay(selBuildingInfo, 'newPlatPlc')}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <label>외필지 수</label>
                    <input type="text" className="W130"  readOnly title={emptyDisplay(selBuildingInfo,'bylotCnt')} value={emptyDisplay(selBuildingInfo,'bylotCnt')} />
                    {/* <a href="#" className="btn1">외필지 수</a> */}
                    </td>
                    <td>
                    <label>건축물 명칭</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(selBuildingInfo,'bldNm')} value={emptyDisplay(selBuildingInfo,'bldNm')} />
                    </td>
                    <td>
                    <label>동명칭 및 번호</label>
                    <input type="text" className="W200"  title="동명칭 및 번호" />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <label>주용도</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'mainPurpsCd')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'mainPurpsCd')} />
                    <input type="text" className="W330"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'mainPurpsCdNm')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'mainPurpsCdNm')} />
                    </td>
                    <td>
                    <label>허가일자</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'pmsDay')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'pmsDay')} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <label>주구조</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'strctCd')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'strctCd')} />
                    <input type="text" className="W330"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'strctCdNm')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'strctCdNm')} />
                    </td>
                    <td>
                    <label>착공일자</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'stcnsDay')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'stcnsDay')} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <label>지붕</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'roofCd')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'roofCd')} />
                    <input type="text" className="W330"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'roofCdNm')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'roofCdNm')} />
                    </td>
                    <td>
                    <label>사용승인일</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'useAprDay')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'useAprDay')} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label>대지면적(m<sup>2</sup>)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'platArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'platArea')} />
                    </td>
                    <td>
                    <label>건축면적(m<sup>2</sup>)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'archArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'archArea')} />
                    </td>
                    <td>
                    <label>건폐율(%)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'bcRat')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'bcRat')} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label>연면적(m<sup>2</sup>)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'totArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'totArea')} />
                    </td>
                    <td>
                    <label style={{fontSize: '12px'}}>용적률 산정용연면적(m<sup>2</sup>)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'vlRatEstmTotArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'vlRatEstmTotArea')} />
                    </td>
                    <td>
                    <label>용적률(%)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'vlRat')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'vlRat')} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label>총동연면적(m<sup>2</sup>)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrTitleInfo[0],'totDongTotArea')} value={emptyDisplay(buildingInfo.getBrTitleInfo[0],'totDongTotArea')} />
                    </td>
                    <td>
                    <label>지상/지하 층수(층)</label>
                    <input type="text" className="W90"  readOnly title={emptyDisplay(buildingInfo.getBrTitleInfo[0],'grndFlrCnt')} value={emptyDisplay(buildingInfo.getBrTitleInfo[0],'grndFlrCnt')} />/
                    <input type="text" className="W90"  readOnly title={emptyDisplay(buildingInfo.getBrTitleInfo[0],'ugrndFlrCnt')} value={emptyDisplay(buildingInfo.getBrTitleInfo[0],'ugrndFlrCnt')} />
                    </td>
                    <td>
                    <label>높이(m)</label>
                    <input type="text" className="W200"  readOnly title={emptyDisplay(buildingInfo.getBrTitleInfo[0],'heit')} value={emptyDisplay(buildingInfo.getBrTitleInfo[0],'heit')} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label>세대/호/가구</label>
                    <input type="text" className="W50"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'hhldCnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'hhldCnt')} />/
                    <input type="text" className="W50"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'hoCnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'hoCnt')} />/
                    <input type="text" className="W50"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'fmlyCnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'fmlyCnt')} />
                    </td>
                    <td colSpan={2}>
                    <label style={{fontSize: '14px'}}>부속건출물수(동/m<sup>2</sup>)</label>
                    <input type="text" className="W90"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'atchBldCnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'atchBldCnt')} />/
                    <input type="text" className="W90"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'atchBldArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'atchBldArea')} />
                    </td>
                </tr>
                </tbody>
            </table>
            </div>  
            <h4>층별 현황</h4>
            <table className="st1 MgT5 fullFrame">
            <caption>건축물 정보 검색 결과</caption>
            <colgroup>
                <col style={{width: '100px'}} />
                <col style={{width: '100px'}} />
                <col style={{width: '100px'}} />
                <col style={{width: '150px'}} />
                <col style={{width: '200px'}} />
                <col style={{width: '150px'}} />
                <col />
                <col style={{width: '100px'}} />
            </colgroup>
            <thead>
                <tr>
                <th>주</th>
                <th>층번호</th>
                <th>층명칭</th>
                <th>구조</th>
                <th>구조명</th>
                <th>용도</th>
                <th>용도명</th>
                <th>면적(m<sup>2</sup>)</th>
                </tr>
            </thead>
            <tbody>
                {buildingInfo && buildingInfo.getBrFlrOulnInfo && buildingInfo.getBrFlrOulnInfo.map((flr, idx) => 
                <tr key={idx}>
                <td></td>
                <td>{emptyDisplay(flr,'flrNo')}</td>
                <td>{emptyDisplay(flr,'flrNoNm')}</td>
                <td>{emptyDisplay(flr,'strctCd')}</td>
                <td>{emptyDisplay(flr,'strctCdNm')}</td>
                <td>{emptyDisplay(flr,'mainPurpsCd')}</td>
                <td>{emptyDisplay(flr,'mainPurpsCdNm')}</td>
                <td>{emptyDisplay(flr,'area')}</td>
                </tr>
                )}
            </tbody>
            </table>
            <h4>주차장 정보</h4>
            <div className="box">
            <table className="st2 MgT5 fullFrame">
                <caption>토지기본사항</caption>
                <colgroup>
                <col style={{width: '50%'}} />
                <col />
                </colgroup>
                <tbody>
                <tr>
                    <td>
                    <label style={{width: '140px'}}>옥내기계식 대수/면적</label>
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrMechUtcnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrMechUtcnt')} />/
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrMechArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrMechArea')} />
                    </td>
                    <td>
                    <label style={{width: '140px'}}>옥내자주식 대수/면적</label>
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrAutoUtcnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrAutoUtcnt')} />/
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrAutoArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'indrAutoArea')} />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label style={{width: '140px'}}>옥외기계식 대수/면적</label>
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrMechUtcnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrMechUtcnt')} />/
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrMechArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrMechArea')} />
                    </td>
                    <td>
                    <label style={{width: '140px'}}>옥외자주식 대수/면적</label>
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrAutoUtcnt')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrAutoUtcnt')} />/
                    <input type="text" className="W140"  readOnly title={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrAutoArea')} value={emptyDisplay(buildingInfo.getBrRecapTitleInfo[0],'oudrAutoArea')} />
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Building