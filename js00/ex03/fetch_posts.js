async function Data()
{
    const url = "https://jsonplaceholder.typicode.com/posts";
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        const l = await response.json()
        let s = l.length -10;
        for(;s< l.length;s++)
            console.log(l[s].title)
    }
    catch(error){

        console.error("Error is : ",error.message)
    }

}
Data()