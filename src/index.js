module.exports = function check(str, bracketsConfig) {
  let brakets = {};
  bracketsConfig.forEach(elem => { brakets[elem[1]] = elem[0] })
  let bracketsRight = Object.keys(brakets);
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (isCloseBracket(current)) {
      if (brakets[current] == stack[stack.length - 1]) {
        stack.pop();
      } else {

        return false;
      }

    } else {

      stack.push(current);
    }

  }

  return stack.length === 0;
  function isCloseBracket(ch) {
    if (brakets[ch] == ch) {
      brakets[ch] = ""
      return false
    } else {
      if (brakets[ch] == "") {
        brakets[ch] = ch
      }
      return bracketsRight.indexOf(ch) > -1
    }

  }

}
