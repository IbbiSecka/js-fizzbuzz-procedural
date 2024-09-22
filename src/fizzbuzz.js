const answer = []

// Write your code below this line


for (let i = 1; i < 16; i++) {
    let result
    if(i % 3 == 0 && i % 5 == 0){
        result = "FizzBuzz"
    } else if(i % 3 == 0){
        result = "Fizz"
    }
    else if(i % 5 ==0 ){
        result = "Buzz"
    } else{
        result = i
    }
    answer.push(result)
}
console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
