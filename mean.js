//lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

//Here is an example of your return

//[3.6, "udiwstagwo"]

function mean(arr){
    const str = arr.filter(value=>isNaN(value)).join("")
    const numarr= arr.filter(value=> !isNaN(value)).map(value=>Number(value)) 
    const len = numarr.length;
    let sum = numarr.reduce((total,value)=>total+value,0)/len
    return [sum,str]
}
console.log(mean( ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']))