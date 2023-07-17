function addUpToN(n) {
  let result = 0;

  for (let i = 0; i <= n; i += 1) {
    result += i;
  }

  return result;
}

function secondAddUpToN(n) {
  return (n * (n + 1)) / 2;
}

console.log(secondAddUpToN(101000000000));
