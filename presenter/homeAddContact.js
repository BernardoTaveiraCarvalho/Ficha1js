import { addContact,getContact } from "../store/ContactList.js"
import { addli } from "../view/addLi.js"
function homeAddContact(name,phone,email){
    const contactIndex= addContact(name,phone,email)
    const [contactInfo]= getContact(contactIndex-1,true)
    addli(contactInfo)
}
export{homeAddContact}