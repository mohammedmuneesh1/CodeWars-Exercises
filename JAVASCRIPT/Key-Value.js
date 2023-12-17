//QUESTION

//solution({a: 1, b: '2'}) // should return "a = 1,b = 2"


function solution(pairs){
    const arr = Object.entries(pairs)
    const result = arr.map(([value,index])=>  `${value} = ${index}` )
    return result.join(",");
  }
  console.log(solution({a: 1, b: '2'}))
  