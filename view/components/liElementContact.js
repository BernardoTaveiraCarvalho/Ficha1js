import { qs,ce } from "../../helper/dom.js"
import { textli } from "./textLi.js"
import { btnElemContact } from "./widgets/btnElementContact.js"
import { delContact } from "../events/delContact.js"
import {editContact} from "../events/editContact.js"
function liElemContact(contact,index){
    const liElem=ce("li",textli(contact))
    liElem.append(btnElemContact('Edit','click',editContact))
    liElem.append(btnElemContact('Delete','click',delContact,index))
    return liElem
}
export {liElemContact}