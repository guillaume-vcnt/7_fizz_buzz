// FizzBuzz

// 1 = number, 3 = fizz, 5 = buzz, 15 = fizzbuzz

const fizzbuzz = (nb) => {
    if (nb % 3 == 0 && nb % 5 == 0) {
      return console.log(nb, "fizz buzz")
    }
    if (nb % 3 == 0) {
      return console.log(nb, "fizz")
    }
    if (nb % 5 == 0) {
      return console.log(nb, "buzz")
    } else return console.log(nb)
  }
  
  fizzbuzz(1)
  fizzbuzz(3)
  fizzbuzz(5)
  fizzbuzz(15)
  
