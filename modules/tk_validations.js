function validate(amount, haveCurrency, wantCurrency) {
  if (amount.length == 0) {
    return "Please fill amount in box.";
  }

  if (!Number(amount)) {
    return "Enter correct number.";
  }

  if (haveCurrency.length == 0 || wantCurrency.length == 0) {
    return "Please select currency from dropdown box";
  }

  return true;
}

module.exports = { validate };
