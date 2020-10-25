import React, {useState, useEffect, useContext} from 'react'
import {LandInfoContext} from './LandInfoContext';
import {emptyDisplay} from '../Common'

const Total = () => {
    const {workType, landInfo, buildingInfo} = useContext(LandInfoContext);

    return (
        <div id="panel_tab1" className="panel_content" style={{display:workType==='total' ? 'block' : 'none'}}>
            <h3>토지 정보<span>토지 정보 데이터를 한눈에 확인하세요!</span></h3>
            <table className="st1 MgT5 fullFrame">
            <caption>토지 정보 검색 결과</caption>
            <colgroup>
                <col style={{width: '25%'}} />
                <col style={{width: '25%'}} />
                <col style={{width: '25%'}} />
                <col style={{width: '25%'}} />
            </colgroup>
            <thead>
                <tr>
                <th>지목</th>
                <th>면적(M<sup>2</sup>)</th>
                <th>축척</th>
                <th>소유구분</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{landInfo.lndcgrCodeNm}</td>
                <td>{landInfo.lndpclAr}</td>
                <td>{landInfo.ladFrtlScNm}</td>
                <td>{landInfo.posesnSeCodeNm}</td>
                </tr>
            </tbody>
            </table>
            <h3>건축물 정보<span>건축물 정보 데이터를 한눈에 확인하세요!</span></h3>
            <table className="st1 MgT5 fullFrame">
            <caption>건축물 정보 검색 결과</caption>
            <colgroup>
                <col style={{width: '120px'}} />
                <col style={{width: '150px'}} />
                <col style={{width: '110px'}} />
                <col style={{width: '110px'}} />
                <col style={{width: '110px'}} />
                <col style={{width: '80px'}} />
                <col />
                <col style={{width: '80px'}} />
                <col style={{width: '120px'}} />
            </colgroup>
            <thead>
                <tr>
                <th>대장구분</th>
                <th>주용도</th>
                <th>대지면적</th>
                <th>건축면적</th>
                <th>연면적(M<sup>2</sup>)</th>
                <th>용적율</th>
                <th>구조</th>
                <th>층수</th>
                <th>허가일자</th>
                </tr>
            </thead>
            <tbody>
                {buildingInfo && buildingInfo.getBrTitleInfo &&  buildingInfo.getBrTitleInfo.map((brTitle, idx) => 
                    <tr key={idx}>
                    <td>{emptyDisplay(brTitle,'regstrGbCdNm')}</td>
                    <td>{emptyDisplay(brTitle,'mainPurpsCdNm')}</td>
                    <td>{emptyDisplay(brTitle,'platArea')}</td>
                    <td>{emptyDisplay(brTitle,'archArea')}</td>
                    <td>{emptyDisplay(brTitle,'totArea')}</td>
                    <td>{emptyDisplay(brTitle,'vlRat')}</td>
                    <td>{emptyDisplay(brTitle,'strctCdNm')}</td>
                    <td>{emptyDisplay(brTitle,'grndFlrCnt')}</td>
                    <td>{emptyDisplay(brTitle,'pmsDay')}</td>
                    </tr>
                )}
            </tbody>
            </table>
            <h3>토지이용 계획<span>토지이용 계획 정보 데이터를 한눈에 확인하세요!</span></h3>
            <table className="st1 MgT5 fullFrame">
            <caption>토지이용 계획 검색 결과</caption>
            <colgroup>
                <col style={{width: '50%'}} />
                <col style={{width: '50%'}} />
            </colgroup>
            <thead>
                <tr>
                <th colSpan={2}>지역·지구  등 지정여부</th>
                </tr>
                <tr>
                <th>「국토의 계획 및 이용에 관한 법률」에 따른 지역˙지구 등</th>
                <th>다른 법령 등에 따른 지역˙지구 등</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>도시지역, 자연녹지지역, 소로2류(폭 8M~10M)(저촉)</td>
                <td>가축사육제한구역(하천에서 300m 이내 - 전 축종 제한)<br />&lt;가축분뇨의 관리 및 이용에 관한 법률&gt;, 자연보전권역&lt;수도권정비계획법&gt;,<br />배출시설설치제한지역&lt;수질 및 수생태계 보전에 관한법률&gt;,<br />수질보전특별대책지역&lt;환경정책기본법&gt;</td>
                </tr>
            </tbody>
            </table>
            <table className="st1 MgT15 fullFrame">
            <caption>토지이용규제 기본법 시행령 제 9조 제4항 각 호에 해당되는 사항</caption>
            <colgroup>
                <col style={{width: '751px'}} />
                <col />
            </colgroup>
            <thead>
                <tr>
                <th colSpan={2}>지역·지구  등 지정여부</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td colSpan={2}>-</td>
                </tr>
                <tr>
                <td className="PdL15 PdR15"><img src="images/pic.gif" alt="그림 설명" /></td>
                <td>
                    <ul className="item">
                    <li><img src="images/item01.gif" alt="도시지역 범례" />도시지역</li>
                    <li><img src="images/item02.gif" alt="제3종일반주거지역 범례" />제3종일반주거지역</li>
                    <li><img src="images/item03.gif" alt="일반상업지역 범례" />일반상업지역</li>
                    <li><img src="images/item04.gif" alt="자연녹지지역 범례" />자연녹지지역</li>
                    <li><img src="images/item05.gif" alt="성장관리권역 범례" />성장관리권역</li>
                    <li><img src="images/item06.gif" alt="비행안전제3구역(전술) 범례" />비행안전제3구역(전술)</li>
                    <li><img src="images/item07.gif" alt="준보전산지 범례" />준보전산지</li>
                    <li><img src="images/item08.gif" alt="가축사육제한구역 범례" />가축사육제한구역</li>
                    <li><img src="images/item09.gif" alt="상대보호구역 범례" />상대보호구역</li>
                    <li><img src="images/item10.gif" alt="대로1류(폭 35M~40M) 범례" />대로1류(폭 35M~40M)</li>
                    <li><img src="images/item10.gif" alt="중로1류(폭 20M~25M) 범례" />중로1류(폭 20M~25M)</li>
                    <li><img src="images/item11.gif" alt="근린공원 범례" />근린공원</li>
                    <li><img src="images/item12.gif" alt="법정동 범례" />법정동</li>
                    </ul>
                    <div className="AL PdL50 MgT10">
                    <label style={{display: 'none'}}>선택</label>
                    <select className="W250 ">
                        <option>1200</option>
                    </select>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Total