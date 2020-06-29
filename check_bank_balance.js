var balance = -1;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
  if (isActive) {
    if (balance > 0) {
    console.log('Your balance is $' + balance.toFixed(2));
    }
    else if (balance === 0) {
      console.log("Your account is empty.");
    }
    else if (balance < 0) {
      console.log("Your balance is negative. Please contact the bank.");
    }
  }
  else {
    console.log("Your account is no longer active.");
  }
}
else {
  console.log("Thank you. Have a nice day!");
}
