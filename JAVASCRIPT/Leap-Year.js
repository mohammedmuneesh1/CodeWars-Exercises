//QUESTION-
//  whether a given year is a leap year or not. In case you don't know the rules, here they are:
//     Years divisible by 4 are leap years,
//     but years divisible by 100 are not leap years,
//     but years divisible by 400 are leap years.




//ANSWER

  const isLeapYear=(year)=> (year % 4 === 0 && year%100 !== 0)  || year % 400 === 0 ?true :false
  console.log(isLeapYear(2016))

// Non-leap years:[1700,1800,1900,2100,2200,2300]
//leap years: [ 1804, 1904, 2000, 2104]
