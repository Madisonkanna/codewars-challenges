//Feel free to make a PR with code comments on how you think this code could be better! Improvement suggestions always welcome.
function solution(number){
  //create a loop that counts i to num
  //check if each number is a multiple of 3 or 5
  //add number to sum if it is
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
   
}
