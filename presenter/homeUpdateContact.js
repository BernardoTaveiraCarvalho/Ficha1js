import { getContact, updContact} from "../store/ContactList.js"
import { updateContact } from "../view/updateContact.js"
function homeUpdateContact (index,name,phone,email){
    updContact(index,name,phone,email)
    const [contact]=   getContact(index,true)
    updateContact(index,contact)
}
export {homeUpdateContact}