//Dependencies
const Simple_Exec = require("simple-exec")

//Main
describe("Upon executed", ()=>{
    it("should return a payload with the link embed on it", async()=>{
        const result = await Simple_Exec.executeSync("node index.js https://example.com")

        expect(result.output).toContain("https://www.google.com/url?sa=i&url=%68%74%74%70%73%3a%2f%2f%65%78%61%6d%70%6c%65%2e%63%6f%6d&psig=AOvVaw3ukXRCWqnsD6Crwrcn8Emk&ust=1640477046919000")
    })
})