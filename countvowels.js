// write a javscript function that accepts string as a
// parameter and counts the number of vowels with in a string

const countvowels = (str) => {
  const reg = /[aeiou]/gi;
  const totalcountvowels = str.match(reg).length;
  console.log(totalcountvowels);
};
countvowels("The quick brown fox");
