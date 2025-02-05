const button = document.querySelector('#calculate');
const initialInvestmentInput = document.querySelector('#initialInvestment');
const monthlyContributionInput = document.querySelector('#monthlyContribution');
const timeInput = document.querySelector('#time');
const interestRateInput = document.querySelector('#interestRate');

//reading values
const initialInvestmentValue = initialInvestmentInput.value;
const monthlyContributionValue = monthlyContributionInput.value;
const timeValue = timeInput.value;
const interestRateValue = interestRateInput.value;

button.addEventListener('click', () => {
	console.log(initialInvestmentInput.value);
	console.log(monthlyContributionInput.value);
	console.log(interestRateInput.value);
	console.log(timeInput.value);
});

function calculate(initial, monthly, interest, time) {
	let rate = interest / 1000;
	let result = initial * (1 + rate) ** time;
	return result.toFixed(2);
}

console.log(calculate(1000, 0, 5, 50));
