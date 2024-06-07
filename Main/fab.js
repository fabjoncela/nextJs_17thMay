// Create the withdrawl function:
function withdraw(person, amount) {
    if (amount > person.balance) {
        console.log("Withdrawal cannot be completed because your funds are insufficient.");
    } else {
        person.balance -= amount;
        console.log("Withdrawal of " + amount + "$. Remaining balance: " + person.balance + "$.");
    }
}

// Perdorues
var Individi = {
    name: "John",
    balance: 3050
};

// Attempt to withdraw $1200 (more than the balance)
withdraw(Individi, 4200);

// Attempt to withdraw $500 (less than the balance)
withdraw(Individi, 550);
