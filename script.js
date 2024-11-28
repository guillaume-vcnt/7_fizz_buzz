// FizzBuzz

// 1 = number, 3 = fizz, 5 = buzz, 15 = fizzbuzz

const fizzbuzz = (nb) => {
    if (nb % 3 == 0 && nb % 5 == 0) {
      return "FizzBuzz"
    }
    if (nb % 3 == 0) {
      return "Fizz"
    }
    if (nb % 5 == 0) {
      return "Buzz"
    } else return nb
  }
  
  console.log("1",fizzbuzz(1))
  console.log("3",fizzbuzz(3))
  console.log("5",fizzbuzz(5))
  console.log("15",fizzbuzz(15))

