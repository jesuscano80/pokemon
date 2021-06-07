import {palindromo} from "./palindromo";


describe("test con palindromos", ()=>{
    test("sarabaras", ()=>{
        expect(palindromo("sara baras")).toBe("Es palíndromo")
    })
    test("sarabaras with dots and commas", ()=>{
        expect(palindromo("sara. ba,ra.s")).toBe("Es palíndromo")
    })
    test("uppercase and dots", ()=>{
        expect(palindromo("sara. BA,ra.S")).toBe("Es palíndromo")
    })
    test("Not a palindromo", ()=>{
        expect(palindromo("no soy un palindromo")).not.toBe("Es palíndromo")
    })
    test("Null case", ()=>{
        expect(palindromo(null)).toBe("No es palíndromo")
    })
    test("Array?", ()=>{
        expect(palindromo([1,2,1])).toBe("No es palíndromo")
    })
})