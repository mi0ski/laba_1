import './App.css';
function getDigitsSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(getDigitsSum(123)); // 6




export default App;