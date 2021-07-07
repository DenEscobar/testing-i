const enhance = require('./enhance.js');
const items = require('./items.js')


describe('enhancement succeeds', () =>{
    test('item level is less than 15', () =>{
        const enhancedPistol= success(items.pistol);
        expect(enhancedPistol).toHaveProperty('enhancement',7);
        expect(enhancedPistol.name).toEqual("[+7]9mm Revolver");
    });

    test('item enhancement is 15', () =>{
        const newPriRifle = success(items.rifle);
        expect(newPriRifle).toHaveProperty('enhancement',"PRI");
        expect(newPriRifle.name).toEqual("[PRI]Plasma Rifle");
    });

    test('item enhancement is PRI', () =>{
        const newDuoRifle = success(items.PriRifle);
        expect(newDuoRifle).toHaveProperty('enhancement',"DUO");
        expect(newDuoRifle.name).toEqual("[DUO]Plasma Rifle");
    });

    test('item enhancement is DUO', () =>{
        const newTriRifle = success(items.DuoRifle);
        expect(newTriRifle).toHaveProperty('enhancement',"TRI");
        expect(newTriRifle.name).toEqual("[TRI]Plasma Rifle");
    });

    test('item enhancement is TRI', () =>{
        const newTetRifle = success(items.TriRifle);
        expect(newTetRifle).toHaveProperty('enhancement',"TET");
        expect(newTetRifle.name).toEqual("[TET]Plasma Rifle");
    });

    test('item enhancement is TET', () =>{
        const newPenRifle = success(items.TetRifle);
        expect(newPenRifle).toHaveProperty('enhancement',"PEN");
        expect(newPenRifle.name).toEqual("[PEN]Plasma Rifle");
    });

    test('item enhancement is PEN', () =>{
        const enhancedPenRifle = success(items.PenRifle);
        expect(enhancedPenRifle).toHaveProperty('enhancement',"PEN");
        expect(enhancedPenRifle.name).toEqual("[PEN]Plasma Rifle");
    });


})

describe('enhancement fails', ()=>{
    test('Item enhancement is greater and 5 but less than 15', () =>{
        const failedPistol = fail(items.pistol);
        const failedPistol10mm = fail(items.pistol10mm);
        expect(failedPistol).toHaveProperty('durability', 65);
        expect(failedPistol.name).toEqual("[+1]9mm Revolver");
        expect(failedPistol10mm).toHaveProperty('durability', 20);
        expect(failedPistol10mm.name).toEqual("[+1]10mm Revolver");    
    })

    test('Item enhancement is less than 5', () =>{
        const failed44 = fail(items.pistol44);
        expect(failed44).toHaveProperty('durability', 20);
        expect(failed44.name).toEqual(".44 Magnum Revolver");
    })
})

describe('item is repaired', ()=>{
    test("item is repaired", () =>{
        const repairPistol = repair(items.pistol);
        expect(repairPistol).toHaveProperty('durability', 100);
        
    })
})