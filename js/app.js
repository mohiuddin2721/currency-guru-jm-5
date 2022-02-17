function amountCost(amount) {
    const amountText = document.getElementById(amount).value;
    const amountNumber = parseFloat(amountText);
    amountText.value = '';
    return amountNumber;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = amountCost('income-input');
    const foodCost = amountCost('food-cost-input');
    const rentCost = amountCost('rent-cost-input');
    const clothCost = amountCost('cloth-cost-input');
    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('total-balance');
    totalExpenses.innerText = foodCost + rentCost + clothCost;
    totalBalance.innerText = incomeInput - totalExpenses.innerText;
});

document.getElementById('save-btn').addEventListener('click', function () {
    const savingsPercentInput = amountCost('savings-percent-input');
    const incomeInputForSavingCount = amountCost('income-input');
    const savingsAmount = document.getElementById('savings-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const totalBalanceForSavingCount = document.getElementById('total-balance');
    savingsAmount.innerText = incomeInputForSavingCount * savingsPercentInput / 100;
    remainingBalance.innerText = totalBalanceForSavingCount.innerText - savingsAmount.innerText;
});