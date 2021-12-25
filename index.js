//Dependencies
const To_Hex = require("to-hex")

//Variables
var Self_Args = process.argv.slice(2)
var Payload = ""

//Main
if(!Self_Args.length){
    console.log("node index.js <link>")
    process.exit()
}

console.log("Generating your payload, please wait.")
Self_Args[0] = To_Hex(Self_Args[0]).match(/.{0,2}/g)

for( i in Self_Args[0].slice(0, Self_Args[0].length-1) ){
    Payload += `%${Self_Args[0][i]}`
}

Payload = `https://www.google.com/url?sa=i&url=${Payload}&psig=AOvVaw3ukXRCWqnsD6Crwrcn8Emk&ust=1640477046919000`
console.log(`Payload: ${Payload}`)