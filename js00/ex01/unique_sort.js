function uniqueSort(array)
{
   let newArr = [];
    for (let i = 0; i <array.length;i++)
    {
        for (let j = i + 1; j <array.length;j++)
        {
            if(array[i] > array[j])
            {
                let tmp ;
                tmp = array[i];
                array[i] =array[j];
                array[j] = tmp;
            }
        }
    }
    for (let i = 0; i <array.length;i++)
    {
        if(!newArr.includes(array[i]))
            newArr.push(array[i])
    }
    return newArr;
}
console.log(uniqueSort([1,3,1,5,7,7,9]))
