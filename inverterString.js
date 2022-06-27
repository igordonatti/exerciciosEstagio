function reverterString(str) {
  if (str === "") {
    return "";
  } else {
    return reverterString(str.substr(1)) + str.charAt(0);
  }
}

let reverterStringResultado = reverterString("igor");
console.log(reverterStringResultado);
