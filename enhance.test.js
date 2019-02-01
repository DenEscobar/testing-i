const enhance = require('./enhance.js');
const item = require('./items.js')

//Arrange



//Act

const enhancedPistol= success(item.pistol)


//Assert

test('enhancement level increases 1', () =>{
    expect(enhancedPistol).toHaveProperty('enhancement',3);
})

test('enhancement adds "+number" to name', () =>{
    expect(enhancedPistol.name).toEqual("[+3]9mm Revolver");
})