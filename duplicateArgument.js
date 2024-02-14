//QUESTION
// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true

//ANSWER-1
function solution(...arg){
    const set = new Set();
    for(x of arg){
        if(set.has(x)){
            return true
        }
        set.add(x)
    }
    return false;
}

console.log(solution(1,2,3))
//ANSWER-2
function solution(...arg){
    const arr = arg.sort();
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i+1]){
            return true;
        }
    }
    return false;
}

// console.log(solution(1,2,3,4,2))
// console.log(solution(1,2,4))
// console.log(solution('1','2','3','2'))