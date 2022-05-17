import { homeEditContact } from "../../presenter/homeEditContact.js";
import { getElementsList } from "../components/getElementsList.js";
function editContact (e){ 
    const array = getElementsList(e)
    const [ulElem,liElm,index] =array
    homeEditContact(index)
   
}

export {editContact}
