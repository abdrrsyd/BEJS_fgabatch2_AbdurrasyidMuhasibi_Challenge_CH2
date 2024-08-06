class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];
  }

  isValidAmount(amount) {
    return !isNaN(amount) && amount > 0;
  }

  async deposit(amount) {
    if (!this.isValidAmount(amount)) {
      throw new Error("The amount entered is invalid.");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        this.balance += amount;
        this.transactionHistory.push(`Deposited: ${amount}`);
        resolve(`Your new balance is: ${this.balance}`);
      }, 1000);
    });
  }

  async withdraw(amount) {
    if (!this.isValidAmount(amount)) {
      throw new Error("The amount entered is invalid.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        this.balance -= amount;
        this.transactionHistory.push(`Withdrawn: ${amount}`);
        resolve(`Your new balance is: ${this.balance}`);
      }, 1000);
    });
  }

  checkBalance() {
    return `Your balance is: ${this.balance}`;
  }

  async historyTransaction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.transactionHistory.length === 0) {
          resolve("No transactions have been made.");
        } else {
          resolve(
            "Transaction History:\n" + this.transactionHistory.join("\n")
          );
        }
      }, 2000);
    });
  }
}

export default BankAccount;
