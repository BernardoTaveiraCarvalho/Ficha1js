class Contact {
    #fullName;
    #phoneNumber;
    #email;

    get fullName(){
        return this.#fullName;
    }
    get phoneNumber(){
        return this.#phoneNumber;
    }
    get email(){
        return this.#email
    }
    set fullName(fullName){
        this.#fullName = fullName;
    }
    set phoneNumber(phoneNumber){
        this.#phoneNumber = phoneNumber;
    }
    set email(email){
        this.#email = email;
    }
    constructor(fullName,phoneNumber,email){
        this.#email =email
        this.#fullName = fullName
        this.#phoneNumber = phoneNumber
    }
}
export{Contact}