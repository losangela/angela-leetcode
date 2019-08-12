const defangIPaddr = address => {
  let answer = '';
  for (let i = 0; i < address.length; i++) {
    if (address[i] !== '.') {
      answer += address[i]
    } else {
      answer += '[.]'
    }
  }
  return answer
};

console.log(defangIPaddr("255.100.50.0"), `should be 255[.]100[.]50[.]0`)