// write a javascript function that returns a passed
// string with letters in aplhabetical order?

const sort = (str) => {
  let mysortval = str.toString().split("").sort().join("");
  console.log(mysortval);
};
sort("webmaster");
