const ratioswrtusd = {
  cad: 1.38,
  franc: 0.89,
  euro: 0.92,
  pound: 0.78,
};

function calculate(amount, haveCurrency, wantCurrency) {
  if (haveCurrency == wantCurrency) {
    return amount;
  } else if (haveCurrency == "usd") {
    return amount * ratioswrtusd[wantCurrency];
  } else {
    return amount / ratioswrtusd[haveCurrency];
  }
}

module.exports = { calculate };
