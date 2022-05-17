import { FieldEmpty } from "../../exceptions/FieldEmpty.js"
class FieldRequired{
    static exec(input){
        if(!input.value){
           throw new FieldEmpty(input)
        }
    }
}
export {FieldRequired}