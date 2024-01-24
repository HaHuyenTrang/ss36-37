var ip1 = document.getElementById("ip1");
var ip2 = document.getElementById("ip2");
var ip3 = document.getElementById("ip3");

ip1.addEventListener('input', calculateSum);
ip2.addEventListener('input', calculateSum);

function calculateSum() {
  const value1 = parseFloat(ip1.value) || 0;
  const value2 = parseFloat(ip2.value) || 0;
  const sum = value1 + value2;
  ip3.value = sum;
}