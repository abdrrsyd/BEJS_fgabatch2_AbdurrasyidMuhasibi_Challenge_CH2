import BankAccount from "./bank_account.js";

async function getChoice() {
  return new Promise((resolve) => {
    const choice = window.prompt(
      "Select action:\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Transaction History\n5. Exit"
    );
    resolve(choice);
  });
}

async function executeChoice(account, choice) {
  switch (choice) {
    case "1":
      const depositAmount = parseFloat(
        window.prompt("Enter the amount to deposit:")
      );
      return account.deposit(depositAmount);
    case "2":
      const withdrawAmount = parseFloat(
        window.prompt("Enter the amount to withdraw:")
      );
      return account.withdraw(withdrawAmount);
    case "3":
      return account.checkBalance();
    case "4":
      return account.historyTransaction();
    case "5":
      return "Thank you for using the banking app!";
    default:
      return "Invalid selection. Please try again.";
  }
}

async function menu() {
  const account = new BankAccount();

  let choice;
  do {
    choice = await getChoice();
    try {
      const result = await executeChoice(account, choice);
      window.alert(result);
    } catch (error) {
      window.alert(error.message);
    }
  } while (choice !== "5");
}

document.getElementById("startApp").addEventListener("click", menu);
