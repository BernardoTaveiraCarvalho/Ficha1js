
class FieldEmpty extends Error{
    constructor(input){
        super(`${input.name} Empty`)
    }
}
export {FieldEmpty}