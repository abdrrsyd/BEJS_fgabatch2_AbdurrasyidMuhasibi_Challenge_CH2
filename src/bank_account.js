class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];
  }

  isValidAmount(amount) {
    return !isNaN(amount) && amount > 0;
  }

  async processTransaction(action, amount, transactionMessage) {
    if (!this.isValidAmount(amount)) {
      throw new Error("The amount entered is invalid.");
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          action(amount);
          this.transactionHistory.push(transactionMessage(amount));
          resolve(`Your new balance is: ${this.balance}`);
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  }

  async deposit(amount) {
    return this.processTransaction(
      (amt) => (this.balance += amt),
      amount,
      (amt) => `Deposited: ${amt}`
    );
  }

  async withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }
    return this.processTransaction(
      (amt) => (this.balance -= amt),
      amount,
      (amt) => `Withdrawn: ${amt}`
    );
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
