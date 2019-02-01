success = (item) =>{
    if(item.enhancement <15){
        return item = {
            name: `[+${item.enhancement+1}]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: item.enhancement+1  
        }
    } else if (item.enhancement = 15){
        return item = {
            name: `[PRI]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: "PRI" 
        }
    } else if (item.enhancement = "PRI"){
        return item = {
            name: `[DUO]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: "DUO" 
        }
    }else if (item.enhancement = "DUO"){
        return item = {
            name: `[TRI]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: "TRI" 
        }
    }else if (item.enhancement = "TRI"){
        return item = {
            name: `[TET]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: "TET" 
        }
    }else if (item.enhancement = "TET"){
        return item = {
            name: `[PEN]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: "PEN" 
        }
    } else if (item.enhancement = "PEN"){
        return item = {
            name: `[PEN]${item.name}`,
            type: item.type,
            durability: item.durability,
            enhancement: "PEN" 
        }
    }
}

fail = (item) =>{
    if(item.enhancement >5 && item.enhancement <15){
        if(item.durability<25){
            return item = {
                name: item.name,
                type: item.type,
                durability: 20,
                enhancement: item.enhancement
            }
        } else {
            return item = {
                name: `[+${item.enhancement-5}]${item.name}`,
                type: item.type,
                durability: item.durability -5,
                enhancement: item.enhancement 
            }
        }
    } else if (item.enhancement<6) {
        if(item.durability<25){
            return item = {
                name: item.name,
                type: item.type,
                durability: 20,
                enhancement: item.enhancement
            }
        } else {
            return item = {
                name: item.name,
                type: item.type,
                durability: item.durability -5,
                enhancement: item.enhancement
            }
        }
    } else if (item.enhancement = 15){
        if(item.durability<10){
            return item = {
                name: item.name,
                type: item.type,
                durability: 0,
                enhancement: item.enhancement
            }
        } else {
            return item = {
                name: item.name,
                type: item.type,
                durability: item.durability-10,
                enhancement: item.enhancement 
            }
        }
    } else if (item.enhancement = "PRI"){
        if(item.durability<10){
            return item = {
                name: item.name,
                type: item.type,
                durability: 0,
                enhancement: item.enhancement
            }
        } else {
            return item = {
                name: item.name,
                type: item.type,
                durability: item.durability-10,
                enhancement: item.enhancement 
            }
        }
    }else if (item.enhancement = "DUO"){
        if(item.durability<10){
            return item = {
                name: `[PRI]${item.name}`,
                type: item.type,
                durability: 0,
                enhancement: "PRI" 
            }
        } else {
            return item = {
                name: `[PRI]${item.name}`,
                type: item.type,
                durability: item.durability-10,
                enhancement: "PRI" 
            }
        }
    }else if (item.enhancement = "TRI"){
        if(item.durability<10){
            return item = {
                name: `[DUO]${item.name}`,
                type: item.type,
                durability: 0,
                enhancement: "DUO"
            }
        } else {
            return item = {
                name: `[DUO]${item.name}`,
                type: item.type,
                durability: item.durability-10,
                enhancement: "DUO" 
            }
        }
    }else if (item.enhancement = "TET"){
        if(item.durability<10){
            return item = {
                name: `[TRI]${item.name}`,
                type: item.type,
                durability: 0,
                enhancement: "TRI" 
            }
        } else {
            return item = {
                name: `[TRI]${item.name}`,
                type: item.type,
                durability: item.durability-10,
                enhancement: "TRI" 
            }
        }
    } else if (item.enhancement = "PEN"){
        if(item.durability<10){
            return item = {
                name: `[TET]${item.name}`,
                type: item.type,
                durability: 0,
                enhancement: "TET"
            }
        } else {
            return item = {
                name: `[TET]${item.name}`,
                type: item.type,
                durability: item.durability-10,
                enhancement: "TET" 
            }
        }
    }
}

repair = (item) =>{
    return item = {
        name: item.name,
        type: item.type,
        durability: 100,
        enhancement: item.enhancement 
    }

}

module.exports = {
    success, fail, repair,
