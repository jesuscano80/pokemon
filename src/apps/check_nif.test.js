import {checkNif} from "./check_nif"

describe("Check Nif tests",()=>{
    test("should works with a correct NIF",()=>{
        expect(checkNif("07244157P")).toBe("DNI CORRECTO")
    })
    test("should notify the letter was not correct",()=>{
        expect(checkNif("07244157N")).toBe("La letra del DNI no es correcta")
    })
    test("should notify the format is not correct",()=>{
        expect(checkNif("0724415799N")).toBe("el formato no es valido, deben ser 8 números y una letra")
    })
    test("should notify the format is not correct, array",()=>{
        expect(checkNif([1,2,3])).toBe("el formato no es valido, deben ser 8 números y una letra")
    })
    test("should notify the format is not correct, undefined",()=>{
        expect(checkNif(undefined)).toBe("el formato no es valido, deben ser 8 números y una letra")
    })
})