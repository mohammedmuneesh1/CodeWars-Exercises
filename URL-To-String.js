//QUESTION
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//NOT COMPLETED 

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet



function urlToString(url){
console.log(url)
// const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gi;
// const url = /^(?:https?:\/\/)/;
const regex = /(?:https?:\/\/)/;
console.log(regex.exec(url))
// console.log("h")
}

urlToString("https://github.com/carbonfive/raygun")