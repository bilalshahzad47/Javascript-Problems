// Write a JavaScript function which will take an array
// of numbers stored and find the second lowest and second
// greatest numbers, respectively?

const arr = [1, 2, 3, 4, 5];
const seclargestandsmallest = (arr) => {
  let secgreatestnum = arr.sort();
  console.log(secgreatestnum[arr.length - 2]);
  let secsmallestnum = arr.sort()[1];
  console.log(secsmallestnum);
};
seclargestandsmallest(arr);
