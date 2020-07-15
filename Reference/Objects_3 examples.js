var breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "taost", "hashbrowns", "pancakes"]
};

console.log(breakfast);



// Savgings account object with functions to add and remove money and print your acct summary
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
// function that adds the amount passed in the function if it's greater than 0 and adds it to the balance
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
// function that removes money after using a new variable to verify the balance property is greater than 0
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function() {
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
  }
};

console.log(savingsAccount.printAccountSummary());




// facebook profile object with details and functions for adding and eleting messages and friends
var facebookProfile = {
  name: 'Curt',
  friends:  10,
  messages: ['hello', 'I am here', 'I like turtles', 'goodbye cruel world!'],
// facebookProfile.postMessage('text') would push that string to the end of the messages array
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
// this function splices in at the index position of a message to delete and removes one item i.e. that message
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },
// increases friends property by 1
  addFriend: function() {
    facebookProfile.friends += 1;
  },
// decreases friends property by 1
  removeFriend: function() {
    facebookProfile.friends -= 1;
  }
};
// shows property values before function calls
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
// calls the functions a variety of times
facebookProfile.postMessage('new message');
facebookProfile.deleteMessage(1);
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.removeFriend();
// shows property values after function calls
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
