
function getElementsList(e){
     const ulElem= e.target.closest('ul');
    const  liElem= e.target.closest('li')
    const elements=[...ulElem.children] 
 const  index = elements.findIndex(li=> li==liElem);
    return [ulElem,liElem,index]
}
export {getElementsList}