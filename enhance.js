success = (item) =>{
    return item = {
        name: item.name,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement+1 
    }
}

fail = (item) =>{

}

repair = (item) =>{

}

module.exports = {
    success, fail, repair,
}