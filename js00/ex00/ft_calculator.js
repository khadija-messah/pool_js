const read = require('readline')

const f = read.createInterface({
    input:process.stdin,
    output:process.stdout
})

function calcule(a,b,operator)
{
    if(operator === '*')
        console.log("result : ",a * b)
    if(operator === '+')
        console.log("result : ",a + b)
    if(operator === '-')
        console.log("result : ",a - b)
    if(operator === '/')
    {
        if(b != 0)
            console.log("result : ",a / b)
        else
            console.log("Error")
    }
    if(operator == '%')
        console.log("result : ",a % b)
}
f.on('line',(input)=>{
    let j = `${input}`
    j  = j.split(" ")
    if(j.length != 3)
    {
        console.log("Error")
        f.close()
    }
    else
    {
        for(const i in j)
        {
            let conv = Number(j[i])
            if(isNaN(conv)) {
                if((i == 1 && (j[i] != '*' && j[i] != '+' && j[i] != '-' && j[i] != '/' && j[i] != '%')) || i != 1)
                {
                    console.log("Error")
                    f.close()
                    return;

                }
            }
        }
        calcule(Number(j[0]),Number(j[2]),j[1])
        f.close()
        return
    }
})