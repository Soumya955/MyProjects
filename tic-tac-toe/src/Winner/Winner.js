
export function winner(data){
    if(data[0]===data[1]&&data[1]===data[2]&&data[0]!==""){
        return data[0]
    }else if(data[3]===data[4]&&data[4]===data[5]&&data[3]!==""){
        return data[3]
    }else if(data[6]===data[7]&&data[7]===data[8]&&data[6]!==""){
        return data[6]
    }else if(data[0]===data[3]&&data[3]===data[6]&&data[0]!==""){
        return data[0]
    }else if(data[1]===data[4]&&data[4]===data[7]&&data[1]!==""){
        return data[1]
    }else if(data[2]===data[5]&&data[5]===data[8]&&data[2]!==""){
        return data[2]
    }else if(data[0]===data[4]&&data[4]===data[8]&&data[0]!==""){
        return data[0]
    }else if(data[2]===data[4]&&data[4]===data[6]&&data[2]!==""){
        return data[2]
    }else{
        let f=false
        for(let i=0;i<9;i++){
         if(data[i]===""){
            f=true
         }
        }
        if(f){
            return "Not End"
        }else{
            return "Draw"
        }
    }
}