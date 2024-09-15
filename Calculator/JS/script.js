let res = "";
let curr = "";
let exp = "";
document.querySelector("#result").value = "0";
function concat(chosen) {
  curr = chosen;
  if (curr == "-" || curr == "+" || curr == "/" || curr == "*") {
    res = res + exp;
    exp = curr;
    res = res + exp;
    exp = "";
  } else if (curr == "=") {
    res = res + exp;
    res = eval(res);
    document.querySelector("#result").value = res;
    curr = "";
    exp = "";
  } else {
    exp = exp + curr;
    document.querySelector("#result").value = exp;
  }
}
