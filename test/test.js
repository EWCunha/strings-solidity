const Strings = artifacts.require("Strings")

contract("Strings", (accounts) => {
    let strings
    beforeEach(async () => {
        strings = await Strings.new({ from: accounts[0] })
    })

    it("Should return the length of string", async () => {
        const string_var = "Hi there, my name is Eduardo."

        const string_var_length = parseInt(await strings.length(string_var))

        assert(string_var.length === string_var_length)
    })

    it("Should concatenate 2 strings", async () => {
        const string1 = "Hi there, "
        const string2 = "my name is Eduardo."

        const concatenatedStrings = await strings.concatenate(string1, string2)

        assert(string1 + string2 === concatenatedStrings)
    })
})