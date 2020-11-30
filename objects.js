var umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
        } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } else {
            return "The umbrella is already closed!";
        }
    }
};

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
        savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function summary(){
        let reply = "Welcome!\nYour balance is currently " + savingsAccount.balance + " and your interest rate is " + this.interestRatePercent + " %."
        return reply;
    }
};
savingsAccount.deposit(100);
console.log(savingsAccount.balance);
console.log(savingsAccount.printAccountSummary());

let facebookProfile = {
    name: 'kitty',
    friend: 0,
    message: [],
    postMessage: function(newMessage){
        this.message.push(newMessage);
    },
    deleteMessage: function(index){
        this.message.splice(index, 1);
    },
    addFriend: function(){
        friend += 1;
    },
    removeFriend: function(){
        friend -= 1;
    }
}
facebookProfile.postMessage('new');
console.log(facebookProfile.message);
facebookProfile.deleteMessage(0);
console.log(facebookProfile.message);

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function(donut){
    let reply = donut.type + " donuts cost $" + donut.cost + " each";
    console.log(reply);
});