const {Sum} = require("./sum")

descibe("test of api",()=>{
    test("adding 5 and 10",()=>{
        expect(Sum(5,10)).toBe(15)
    })
    test("adding 5 and 15",()=>{
        expect(Sum(5,15)).toBe(20)
    })
    test("adding 25 and 12",()=>{
        expect(Sum(25,12)).toBe(37)
    })
})