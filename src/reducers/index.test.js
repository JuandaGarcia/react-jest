const index = require("./index")
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let callFunction = () => {
            index.default({ cart: ["The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"] }, { payload: { id: 56784 }, type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.default({ cart: ["The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"] }, { payload: { id: 12 }, type: "REMOVE_FROM_CART" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.default({ cart: ["The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"] }, { payload: { id: 12345 }, type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.default({ cart: ["Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"] }, { payload: { id: 12345 }, type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.default({ cart: ["The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"] }, { payload: { id: 56784 }, type: "ADD_TO_CART" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
