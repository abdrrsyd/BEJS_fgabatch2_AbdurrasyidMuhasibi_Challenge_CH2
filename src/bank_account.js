let balance = 0;
const transactionHistory = [];

function isValidAmount(amount) {
  return !isNaN(amount) && amount > 0;
}

function deposit() {
  const amount = parseFloat(window.prompt("Enter the amount to deposit:"));

  if (isValidAmount(amount)) {
    balance += amount;
    transactionHistory.push(`Deposited: ${amount}`);
    window.alert(`Your new balance is: ${balance}`);
  } else {
    window.alert("The amount entered is invalid.");
  }
}

function withdraw() {
  const amount = parseFloat(window.prompt("Enter the amount to withdraw:"));

  if (isValidAmount(amount) && amount <= balance) {
    balance -= amount;
    transactionHistory.push(`Withdraw: ${amount}`);
    window.alert(`Your new balance is: ${balance}`);
  } else if (amount > balance) {
    window.alert("Insufficient balance.");
  } else {
    window.alert("The amount entered is invalid.");
  }
}

function checkBalance() {
  window.alert(`Your balance is: ${balance}`);
}

function historyTransaction() {
  if (transactionHistory.length === 0) {
    window.alert("No transactions have been made.");
  } else {
    window.alert("Transaction History:\n" + transactionHistory.join("\n"));
  }
}

function handleUserChoice(choice) {
  switch (choice) {
    case "1":
      deposit();
      break;
    case "2":
      withdraw();
      break;
    case "3":
      checkBalance();
      break;
    case "4":
      historyTransaction();
      break;
    case "5":
      window.alert("Thank you for using the banking app!");
      break;
    default:
      window.alert("Invalid selection. Please try again.");
  }
}

function menu() {
  let choice;

  do {
    choice = window.prompt(
      "Select action:\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Transaction History\n5. Exit"
    );

    handleUserChoice(choice);
  } while (choice !== "5");
}

document.getElementById("startApp").addEventListener("click", menu);
