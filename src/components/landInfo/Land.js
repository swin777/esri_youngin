import React, {useState, useEffect, useContext} from 'react'
import {LandInfoContext} from './LandInfoContext';

const Land = () => {
    const {workType, landInfo} = useContext(LandInfoContext);

    return (
        <div id="panel_tab2" className="panel_content" style={{display:workType==='land' ? 'block' : 'none'}}>
            <h3>토지기본사항<span>토지기본사항 데이터를 한눈에 확인하세요!</span></h3>
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
                    <label>지목</label>
                    <input type="text" className="W200"  title="지목" readOnly value={landInfo.lndcgrCodeNm?landInfo.lndcgrCodeNm:''}/>
                    </td>
                    <td>
                    <label>토지등급</label>
                    <input type="text" className="W200"  title="토지등급" readOnly />
                    </td>
                    <td>
                    <label>면적(m<sup>2</sup>)</label>
                    <input type="text" className="W200"  title="면적" readOnly value={landInfo.lndpclAr?landInfo.lndpclAr:''}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <label>토지등급일자</label>
                    <input type="text" className="W200"  title="토지등급일자" readOnly />
                    </td>
                    <td>
                    <label>축척</label>
                    <input type="text" className="W200"  title="축척" readOnly value={landInfo.ladFrtlScNm?landInfo.ladFrtlScNm:''}/>
                    </td>
                    <td>
                    <label>등기일자</label>
                    <input type="text" className="W200"  title="등기일자" readOnly />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label>소유</label>
                    <input type="text" className="W200"  title="소유" readOnly value={landInfo.posesnSeCodeNm?landInfo.posesnSeCodeNm:''}/>
                    </td>
                    <td>
                    <label>말소일자</label>
                    <input type="text" className="W200"  title="말소일자" readOnly />
                    </td>
                    <td>
                    <label>건물명</label>
                    <input type="text" className="W200"  title="건물명" readOnly value={landInfo.lndcgrCodeNm?landInfo.lndcgrCodeNm:''}/>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>                
        </div>
    )
}

export default Land