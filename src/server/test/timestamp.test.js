test("timestamp returns the current time", () => {
    const dateSpy = jest.spyOn(Date, "now").mockImplementation(() => new Date("1970-01-01T00:11:22.345-01:00"))
    
    expect(require('../timestamp')()).toEqual("1970-01-01T01:11:22.345Z")

    dateSpy.mockRestore()
})
