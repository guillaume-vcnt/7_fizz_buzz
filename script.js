// FIZZ BUZZ

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

for (i = 1; i <= 50; i++) {
  console.log(fizzbuzz(i))
}