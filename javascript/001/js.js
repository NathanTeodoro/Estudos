function retur(){
  var r
  var n1 = document.getElementById("input").value;
  var s = document.getElementById("input2").value;
  var n2 = document.getElementById("input3").value;
    if (s === '+') {
      r = parseFloat(n1) + parseFloat(n2)
    } else if (s === '-') {
      r = parseFloat(n1) - parseFloat(n2)
    } else if (s === '*'||'.') {
      r = parseFloat(n1) * parseFloat(n2)
    } else if (s === '/') {
      r = parseFloat(n1) / parseFloat(n2)
    } else if (s === '^') {
      r = Math.pow( parseFloat(n1),parseFloat(n2))
    }/*else if (s === '?') {
      r = Math.sqrt(n1,n2)
    */
  document.getElementById("rest").innerHTML = r}