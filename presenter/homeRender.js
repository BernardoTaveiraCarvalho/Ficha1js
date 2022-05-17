import { getContacts } from "../store/ContactList.js"
import { renderUI } from "../view/renderUi.js"
const homeRender =function(){
     renderUI(getContacts())
}
export {homeRender}