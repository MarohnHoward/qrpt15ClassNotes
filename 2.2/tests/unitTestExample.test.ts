describe("Testing Variables", () => {
    test("Testing Strings", () => {
        var stringOne: string = "Hello world."; 
        var stringTwo: string = "Hello world."; 
        var stringThree: string = "hello World."; 
        expect(stringOne).toEqual(stringTwo); 
        expect(stringOne).not.toEqual(stringThree); 
        expect(stringOne).not.toContain(stringThree); 
    })
})