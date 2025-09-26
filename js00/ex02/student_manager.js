const read = require('readline')
const f = read.createInterface({
    input : process.stdin,
    output : process.stdout
})
let l = new Map()
f.on('line',(input)=>{
    
    let data1 = `${input}`
    let data = data1.split(" ")
    if(data[0] == 'add')
    {
        if(data.length != 3)

            console.log("invalid number argument")
        else
            l.set(data[1], data[2])
    }
    else if(data[0] == 'list')
    {
        if(data.length != 1)
            console.log("invalid number argument")
        else
            console.log(l)
    }
    else if(data[0] == 'delete')
    {
        if(data.length != 2)
            console.log("invalid number argument")
        else
                l.delete(data[1])
    }
    else
        console.log("invalide commande")

})