import { homeDelContact } from "../../presenter/homeDelContact.js"
import { getElementsList } from "../components/getElementsList.js";
function delContact (e){
    const array = getElementsList(e)
    const [ulElem,liElm,index] =array
    ulElem.removeChild(liElm);
    homeDelContact(index)
}
export {delContact}