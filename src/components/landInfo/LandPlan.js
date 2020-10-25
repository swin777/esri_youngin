import React, {useState, useEffect, useContext} from 'react'
import {LandInfoContext} from './LandInfoContext';

const LandPlan = () => {
    const {workType} = useContext(LandInfoContext);

    return (
        <div id="panel_tab4" className="panel_content" style={{display:workType==='landPlan' ? 'block' : 'none'}}>
            <h3>지역/지구 등 지정여부<span>지역/지구 등 지정여부 데이터를 한눈에 확인하세요!</span></h3>
            <table className="st1 MgT5 fullFrame">
            <caption>토지 정보 검색 결과</caption>
            <colgroup>
                <col style={{width: '50%'}} />
                <col />
            </colgroup>
            <thead>
                <tr>
                <th>용도지역 지구명</th>
                <th>법률명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="AL PdL30">도시지역</td>
                <td>국토의계획및이용에관한법률</td>
                </tr>
                <tr>
                <td className="AL PdL30">자연녹지지역</td>
                <td>국토의계획및이용에관한법률</td>
                </tr>
                <tr>
                <td className="AL PdL30">자연보전권역</td>
                <td>수도권정비계획법</td>
                </tr>
                <tr>
                <td className="AL PdL30">임업용산지(보전산지)</td>
                <td>산지관리법</td>
                </tr>
                <tr>
                <td className="AL PdL30">준보전산지()</td>
                <td>산지관리법</td>
                </tr>
                <tr>
                <td className="AL PdL30">수질보전특별대책지역</td>
                <td>환경정책기본법</td>
                </tr>
                <tr>
                <td className="AL PdL30">배출시설설치제한지역</td>
                <td>수질 및 수생태계 보전에 관한 법률</td>
                </tr>
                <tr>
                <td className="AL PdL30">가축사육제한구역(650m이내-일부 축종 제한)</td>
                <td>가축분뇨의 관리 및 이용에 관한 법률</td>
                </tr>
                <tr>
                <td className="AL PdL30">가축사육제한구역(하천에서 300m이내-전 축종 제한)</td>
                <td>가축분뇨의 관리 및 이용에 관한 법률</td>
                </tr>
            </tbody>
            </table>
            <h3>▽▽▽▽▽여기는 항공영상 서비스에 들어가있는 탭입니다. ▽▽▽▽▽</h3>
            <ul className="drone_tabs">
            <li><a href="#">범위 기반</a></li>
            <li><a href="#">행정구역 기반</a></li>
            </ul>
            <div id="drone_tab1" className="drone_content">
            <h5>사용자가 지정한 영역 데이터를 다운</h5>
            <hr className="hr_line" />
            <div>화면구성 7페이지에 있는 내용을 그려야하는데 저 내용으론 그릴 수가 없어서 임시로 자리 만들어놨습니다~~~</div>
            </div>
            <div id="drone_tab2" className="drone_content">
            <label>구 선택</label>
            <select className="W170">
                <option>처인구</option>
            </select>
            <hr className="hr_line" />
            <div>이거는 화면구성 8페이지에 있는 내용....역시 화면구성을 알지못해요ㅠ_ㅠ</div>
            </div>
        </div>
    )
}

export default LandPlan