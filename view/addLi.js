import { liElemContact } from "./components/liElementContact.js";
import { qs } from "../helper/dom.js";

function addli (contact){
   qs('ul').append(liElemContact(contact));
}
export {addli}