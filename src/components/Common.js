import { isArray } from "lodash"
import convert from "xml-js"

const makePnu = (addr) =>{
    if(addr.admCd && addr.mtYn && addr.lnbrMnnm && addr.lnbrSlno){
        try{
            return addr.admCd + addr.mtYn + padLeft(addr.lnbrMnnm, 4) + padLeft(addr.lnbrSlno, 4)
        }catch(e){
            return null
        }
    }
    return null
}

const addressToBldPram = (address) => {
    return {'sigunguCd':address.admCd.substring(0, 5), 'bjdongCd':address.admCd.substring(5, 10), 'platGbCd':address.mtYn, 'bun':padLeft(address.lnbrMnnm,4), 'ji':padLeft(address.lnbrSlno,4)}
}

const padLeft = (nr, n, str) =>{
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}

const xml2Json = (xml) => {
    return JSON.parse(convert.xml2json(xml, {compact:true, spaces:4, textFn: RemoveJsonTextAttribute}))
}

const RemoveJsonTextAttribute = (value, parentElement) => {
    try {
      const keyNo = Object.keys(parentElement._parent).length;
      const keyName = Object.keys(parentElement._parent)[keyNo - 1];
      parentElement._parent[keyName] = value;
    } catch (e) {
      console.log(e);
    }
}

const emptyDisplay = (obj, attr) => {
    if(obj && obj[attr]!==undefined){
        return obj[attr]
    }else{
        return ''
    }
}

export {makePnu, xml2Json, addressToBldPram, emptyDisplay}