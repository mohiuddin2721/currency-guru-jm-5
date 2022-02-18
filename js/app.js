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

    const mainIncomeInput = amountCost('income-input');

    const calcTotalBalance = document.getElementById('total-balance');

    const savingsAmount = document.getElementById('savings-amount');

    const remainingBalance = document.getElementById('remaining-balance');

    const savingError = document.getElementById('saving-error');

    const totalSavingMoney = mainIncomeInput * savingsPercentInput / 100;
    console.log(totalSavingMoney);
    savingsAmount.innerText = totalSavingMoney;
    const totalRemainingMoney = calcTotalBalance.innerText - totalSavingMoney;

    if (totalSavingMoney > calcTotalBalance.innerText) {
        savingError.style.display = "block";
        savingsAmount.innerText = '00.00';
        remainingBalance.innerText = calcTotalBalance.innerText;
        return;
    }
    else {
        remainingBalance.innerText = totalRemainingMoney;
    }
});