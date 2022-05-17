import { qs } from "../helper/dom.js";
import { textli } from "../view/components/textLi.js";
function updateContact (index,contact){
    const ulElm = qs('ul');
    const liElm =[...ulElm.children].at(index);
    [...liElm.childNodes].at(0).textContent= textli(contact)
}
export {updateContact}