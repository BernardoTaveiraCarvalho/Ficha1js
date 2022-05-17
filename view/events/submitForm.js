import { qs } from "../../helper/dom.js"
import { homeAddContact } from "../../presenter/homeAddContact.js"
import { homeUpdateContact } from "../../presenter/homeUpdateContact.js"
import { FieldRequired } from "../../validator/form/fieldRequired.js"
import { cleanInputs } from "../cleanInputs.js"
import { formValues } from "../../helper/dom.js"
function submitForm(e){
    e.preventDefault()
    const inputArray = formValues(e.target)
    const [inputName,inputPhone,inputEmail]= inputArray

    try{
    inputArray.forEach(input => FieldRequired.exec(input));
    const form = qs('form')
    if(form.hasOwnProperty('editing')){
        homeUpdateContact(form.editing,inputName,inputPhone,inputEmail) 
        delete form.editing
    }
    else{
        homeAddContact(inputName,inputPhone,inputEmail)
    }
    cleanInputs(form)
   }
catch(e){
    console.error(e)
}

}
export{submitForm}

