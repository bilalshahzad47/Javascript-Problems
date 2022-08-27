// write a javscript function that accepts a number as a
// parameter and check the number is prime or not?

const primenumber = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};
console.log(primenumber(11));
