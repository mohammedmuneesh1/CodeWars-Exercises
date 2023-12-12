//QUESTION

// Write a simple regex to validate a username. Allowed characters are:
//     lowercase letters,
//     numbers,
//     underscore
// Length should be between 4 and 16 characters (both included).

//ANSWER 

function validateUser(username){
        let res = /^[a-z0-9_]{4,16}$/.test(username)
        console.log(res)    
}








// Note
// /: Delimiters.regular expressions are enclosed in forward slashes to indicate the beginning and end of the pattern.
// ^: Anchors the regex at the beginning of the string. It asserts that the following pattern should match at the start of the string.
// [a-z0-9_]: set of characters allowed
// a-z: lowercase letter from 'a' to 'z'.
// 0-9:  digit from '0' to '9'.
// _: The underscore character.
// $: Anchors the regex at the end of the string.


