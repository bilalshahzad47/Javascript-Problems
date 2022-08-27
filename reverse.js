//write a javascript function that reverse a number

const revInt = (num) => {
  let revNum = num.toString().split("").reverse().join("");
  if (revNum.endsWith("-")) {
    revNum = "-" + revNum;
    return parseInt(revNum);
  } else {
    return parseInt(revNum);
  }
};
console.log(revInt(-123));
