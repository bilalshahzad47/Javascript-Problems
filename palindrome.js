// write a javascript function that checks whether a
// string  is palindrome or not?

let value = "madams";
const palindrome = () => {
  let mypalval = value.toString().split("").reverse().join("");
  mystrval = value.toString();
  if (mypalval === mystrval) {
    console.log("Its Palindrome");
  } else {
    console.log("Its not palindrome");
  }
};
palindrome();
