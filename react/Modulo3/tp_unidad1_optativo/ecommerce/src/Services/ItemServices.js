import instance from "../Config/axios";
export function getAll(query=""){
    return instance.get("products"+query)
}
export function getById(id){
    return instance.get("products/"+id)
}