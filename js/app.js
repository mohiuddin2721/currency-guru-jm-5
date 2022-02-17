function amountCost(amount) {
    const amountText = document.getElementById(amount).value;
    const amountNumber = parseFloat(amountText);
    return amountNumber;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = amountCost('income-input');
    const incomeInputNumber = incomeInput;
    const foodCost = amountCost('food-cost-input');
    const foodCostNumber = foodCost;
    const rentCost = amountCost('rent-cost-input');
    const rentCostNumber = rentCost;
    const clothCost = amountCost('cloth-cost-input');
    const clothCostNumber = clothCost;
    const expenses = document.getElementById('total-expenses');
    const expensesNumber = expenses;
    const balance = document.getElementById('total-balance');
    const balanceNumber = balance;

    // const input = document.getElementById('income-input'.value);
    // const food = document.getElementById('food-cost-input'.value);
    // const rent = document.getElementById('rent-cost-input'.value);
    // const cloth = document.getElementById('cloth-cost-input'.value);

    const totalExpenses = foodCostNumber + rentCostNumber + clothCostNumber;
    const totalBalance = incomeInputNumber - totalExpenses;
    const errorMessage = document.getElementById('error-message');
    const errorMoreIncome = document.getElementById('error-more-income');
    const foodError = document.getElementById('food-error');
    
    if (
        isNaN(incomeInputNumber) ||
        incomeInputNumber < 0 
    ) {
        errorMessage.style.display = "block";
        return;
    }
    if (
        isNaN(foodCostNumber) ||
        isNaN(rentCostNumber) ||
        isNaN(clothCostNumber) ||
        foodCostNumber < 0 || 
        rentCostNumber < 0 || 
        clothCostNumber < 0
    ) {
        foodError.style.display = "block";
        return;
    }
    if (totalBalance < totalExpenses) {
        errorMoreIncome.style.display = "block";
        return;
    }
    else {
        expensesNumber.innerText = totalExpenses;
        balanceNumber.innerText = totalBalance;
    }

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