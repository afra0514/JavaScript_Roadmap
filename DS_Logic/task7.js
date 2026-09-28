function titleCase(str) {
  return str
    .toLowerCase()               
    .split(' ')                  
    .map(word => {
      if (!word) return '';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');                  
}
console.log(titleCase("i love coding"));         
console.log(titleCase("my name is afra"));         
console.log(titleCase("WaTeR"));   