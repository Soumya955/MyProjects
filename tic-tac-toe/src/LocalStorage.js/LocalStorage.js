

export function getDataFromLocalstorage(key){
   return JSON.parse(localStorage.getItem(key));
}


export function setdataToLocalStirage(key,value){
    localStorage.setItem(key,JSON.stringify(value));
    return "sucsess";
}