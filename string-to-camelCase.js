// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// function camelCase(str){
//     const result = str.replace(/[-_]/g," ")
//     console.log(result)

// }
// camelCase("the-stealth-warrior")

function camelCase(str) {
    // Step 1: Remove all hyphens and underscores
    const result =  str.replace(/[-_/](.)/g,(_,c)=>c.toUpperCase()) //, the matching string , c captures the character after the symbol
    //the capturing group (.) captures the single character that comes after either a hyphen - or an underscore _.
   
    return result.charAt(0) + result.slice(1); 

    // Step 2: Convert the first character to lowercase
    // return result.charAt(0).toLowerCase() + result.slice(1);
}
console.log(camelCase("the/stealth/warrior-hi_hello"))

