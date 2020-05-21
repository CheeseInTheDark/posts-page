describe("token store", () => {
   
    let subject
    
    beforeEach(() => {
        jest.useFakeTimers('modern')
        jest.resetModules()
        subject = require('../token-store')
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    test("rejects invalid tokens", () => {
        expect(subject.isValid("bad token")).toBe(false)
    })

    test("accepts added tokens", () => {
        subject.add("I like tokens")

        expect(subject.isValid("I like tokens")).toBe(true)
    })

    test("rejects expired tokens", () => {
        subject.add("I like tokens")

        jest.advanceTimersByTime((20 * 60 * 1000) - 1)

        expect(subject.isValid("I like tokens")).toBe(true)

        jest.advanceTimersByTime(1)

        expect(subject.isValid("I like tokens")).toBe(false)
    })
})