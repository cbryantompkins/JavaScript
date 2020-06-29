var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.2;


if (shirtWidth < 20 && shirtLength < 29 && shirtSleeve < 8.38) {
  console.log("size S");
}
else if (shirtWidth < 22 && shirtLength < 30 && shirtSleeve < 8.63) {
  console.log("size M");
}
else if (shirtWidth < 24 && shirtLength < 31 && shirtSleeve < 8.88) {
  console.log("size L");
}
else {
  console.log("na");
}


// Udacity's way - techincally more restrictive, tho mine works

var shirtWidth = 20;
var shirtLength = 29;
var shirtSleeve = 8.40;

var size = "NA";

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38)) {
    size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63)) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88)) {
    size = "L"
}
else {
  size = "NA";
}
console.log(size);
