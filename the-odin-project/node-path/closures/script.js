function makeAdding (firstNumber) {
  const first=firstNumber;
  return function resulting(secondNumber) {
    const second = secondNumber;
    return first+second;
  }
}

const add5 = makeAdding(5);
console.log(add5(4))