import { qs } from "../helper/dom.js"
import { formValues } from "../helper/dom.js"
function editContact (contact,index){
    const form= qs('form')
    form.editing =index

    const [inputName,inputPhone,inputEmail]= formValues(form)
    inputName.value= contact.fullName
    inputPhone.value= contact.phoneNumber
    inputEmail.value= contact.email
    
}
export {editContact}

