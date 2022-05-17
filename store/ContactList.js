import { Contact } from "../model/Contact.js"

    const contacts =[
        new Contact('Bernardo','912322125','Bernardo1@gmail.com'),
        new Contact('Bernardo','912322125','Bernardo2@gmail.com'),
        new Contact('Bernardo','912322125','Bernardo3@gmail.com'),
    ];
    const getContacts= () => contacts;
    const getContact=(id,stop=false) =>(stop) ? contacts.slice(id,id+1):contacts.slice(id)

    const delContact =id=>  contacts.splice(id,1)
 
    
    const addContact=(name,phone,email)=>contacts.push(new Contact(name.value,phone.value,email.value))

    const updContact =(index,name,phone,email) => {
        const contact =contacts.at(index)
        contact.fullName= name.value
        contact.phoneNumber= phone.value
        contact.email= email.value
    }
export{getContacts,getContact,delContact,addContact,updContact};

