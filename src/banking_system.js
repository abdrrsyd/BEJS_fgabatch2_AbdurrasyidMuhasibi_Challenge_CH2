import BankAccount from "./bank_account.js";

async function menu() {
  const account = new BankAccount();

  function handleUserChoice(choice) {
    switch (choice) {
      case "1":
        return account.deposit(
          parseFloat(window.prompt("Enter the amount to deposit:"))
        );
      case "2":
        return account.withdraw(
          parseFloat(window.prompt("Enter the amount to withdraw:"))
        );
      case "3":
        return Promise.resolve(account.checkBalance());
      case "4":
        return account.historyTransaction();
      case "5":
        return Promise.resolve("Thank you for using the banking app!");
      default:
        return Promise.resolve("Invalid selection. Please try again.");
    }
  }

  let choice;
  do {
    choice = window.prompt(
      "Select action:\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Transaction History\n5. Exit"
    );

    try {
      const result = await handleUserChoice(choice);
      window.alert(result);
    } catch (error) {
      window.alert(error.message);
    }
  } while (choice !== "5");
}

document.getElementById("startApp").addEventListener("click", menu);
