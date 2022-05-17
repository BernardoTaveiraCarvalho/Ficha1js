import { addE, ce } from "../../../helper/dom.js"

function  btnElemContact(text,event,func,values){
    const btnElem=ce("button",text)
    addE(btnElem,event,func,values)
    return btnElem
 }
 export {btnElemContact}