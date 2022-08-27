// write a javscript function that accepts string as a
// parameter and find the longest word with in a string?

const str = "Web Development Tutorial";
const findLongest = (str = "") => {
  const strArr = str.split(" ");
  const word = strArr.reduce((acc, val) => {
    let { length: len } = acc;
    if (val.length > len) {
      acc = val;
    }
    return acc;
  }, "");
  return word;
};
console.log(findLongest(str));
