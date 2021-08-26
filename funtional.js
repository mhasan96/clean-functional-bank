function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInText = inputField.value;
  inputField.value = "";
  const value = parseFloat(valueInText);
  return value;
}
function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldValueInText = fieldTag.innerText;
  const value = parseFloat(fieldValueInText);
  return value;
}
function updateTotal(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousTotalText = totalTag.innerText;
  const previousTotal = parseFloat(previousTotalText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;
  return newTotal;
}

function updateBalance(amount, isAdding) {
  const balanceTag = document.getElementById("balance-total");
  const balanceInText = balanceTag.innerText;
  const previousBalance = parseFloat(balanceInText);
  let newBalance;
  if (isAdding == true) {
    newBalance = previousBalance + amount;
  } else {
    newBalance = previousBalance - amount;
  }
  balanceTag.innerText = newBalance;
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    if (amount > 0) {
      updateTotal("deposit-total", amount);
      updateBalance(amount, true);
    }
  });

// handle withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
      updateTotal("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
  });
