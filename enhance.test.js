const enhance = require('./enhance.js');

//Arrange

const item = {
    name:"knife",
    type:"weapon",
    durability: 70,
    enhancement: 2,
}

//Act

const enhancedItem = success(item)


//Assert

test('enhancement level increases 1', () =>{
    expect(enhancedItem).toHaveProperty('enhancement',3)
},)