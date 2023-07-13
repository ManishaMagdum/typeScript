var a = prompt("Enter Mathematic Marks:");
var math = Number(a);
var b = prompt("Enter Physics Marks:");
var phy = Number(b);
var c = prompt("Enter Chemistry Marks:");
var chem = Number(c);
var sum;
sum = math + phy + chem;
alert("Sum :=> " + sum);
var aveg;
aveg = sum / 3;
alert("Averge :=> " + aveg);
if (aveg < 70) {
    alert("Averge : " + aveg + " :=> C Grade");
}
else if ((aveg > 70) && (aveg < 90)) {
    alert("Averge : " + aveg + " :=> B Grade");
}
else if (aveg > 90) {
    alert("Averge : " + aveg + " :=> A Grade");
}
else {
    alert("Averge : " + aveg + " :=> Fail");
}
