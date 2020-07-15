const enhancer = require('./enhancer.js');
// test away!
describe('repair', () => {
    it('Restore durability to 100', () => {
        const {repair} = enhancer

        const obj = {
            name: 'John',
            durability: 100,
            enhancement: 0,
        }
        const newObj  = repair(obj)

        expect(newObj.durability).toBe(100)
    })
})

describe('succeed', () => {
    it('should increase enhancement level by 1', () => {
        const {succeed} = enhancer
        
        const obj = {
            name: 'John',
            durability: 60,
            enhancement: 0,
        }
        const newObj = succeed(obj)

        expect(newObj.enhancement).toBe(1)
    })
    it('The enhancement level should not change at level 20', () => {
        const {succeed} = enhancer
        
        const obj = {
            name: 'John',
            durability: 60,
            enhancement: 20,
        }
        const newObj = succeed(obj)

        expect(newObj.enhancement).toBe(20)
    })
    it('The durability should not change', () => {
        const {succeed} = enhancer
        
        const obj = {
            name: 'John',
            durability: 60,
            enhancement: 20,
        }
        const newObj = succeed(obj)

        expect(newObj.durability).toBe(60)
    })
});

describe('fail', () => {
    it('If enhancement is < 15, durability decreases by 5', () => {
        const {fail} = enhancer

        const obj = {
            name: 'John',
            durability: 60,
            enhancement: 14,
        }
        const newObj = fail(obj)

        expect(newObj.durability).toBe(55)
    })
    it('If enhancement is >= 15, durability is decreased by 10', () => {
        const {fail} = enhancer

        const obj = {
            name: 'John',
            durability: 60,
            enhancement: 15,
        }
        const newObj = fail(obj)

        expect(newObj.durability).toBe(50)
    })
    it('If enhancement is > 16, the enhancement level decreases by 1', () => {
        const {fail} = enhancer

        const obj = {
            name: 'John',
            durability: 60,
            enhancement: 17,
        }
        const newObj = fail(obj)

        expect(newObj.enhancement).toBe(16)
    })
})

describe('get', () => {
    it('If the enhancement is 0, the the name is not modified', () => {
        const {get} = enhancer

        const obj = {
            name: 'John',
            durability: 60,
            enhancement: 0,
        }

        const newObj = get(obj)

        expect(newObj.name).toBeTruthy()
    })
    // it('If the enhancement is > 0, change the name to include the enhancement level', () => {
    //     const {get} = enhancer

    //     const obj = {
    //         name: 'John',
    //         durability: 60,
    //         enhancement: 1,
    //     }

    //     const newObj = get(obj)

    //     expect(newObj.name).toBeTruthy()
    // })
})

