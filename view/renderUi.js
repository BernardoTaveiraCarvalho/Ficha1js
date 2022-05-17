import { qs } from "../helper/dom.js"
import { liElemContact } from "./components/liElementContact.js"
import { addE } from "../helper/dom.js"
import { submitForm } from "./events/submitForm.js"
const renderUI = function(contacts){
    addE(qs("form"),"submit",submitForm)
    const ulElem= qs("ul")
    contacts.forEach((contact,index) => ulElem.append(liElemContact(contact,index)))

    console.log(contacts)
}

export {renderUI}