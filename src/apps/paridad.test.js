
import {paridad} from "./paridad"

describe("Even / odd test", ()=>{
    test("2 is even?",()=>{
        expect(paridad(2)).toBe("es par")
    })
    test("3 is odd?",()=>{
        expect(paridad(3)).toBe("es impar")
    })
    test("0 is even?", ()=>{
        expect(paridad(0)).toBe("es par")
    })
    test("negative numbers works?", ()=>{
        expect(paridad(-2)).toBe("es par")
    })
    test("a letter", ()=>{
        expect(paridad("a")).toBe("debes introducir numeros")
    })
    test("null case", ()=>{
        expect(paridad(null)).toBe("debes introducir numeros")
    })
    test("array case", ()=>{
        expect(paridad([1,2])).toBe("debes introducir numeros")
    })
    test("object case", ()=>{
        expect(paridad({"pepito":1})).toBe("debes introducir numeros")
    })
    test("undefined case", ()=>{
        expect(paridad(undefined)).toBe("debes introducir numeros")
    })
    
})  