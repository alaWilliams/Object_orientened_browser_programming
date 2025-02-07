const button = document.querySelector('#calculate');
const initialInvestmentInput = document.querySelector('#initialInvestment');
const monthlyContributionInput = document.querySelector('#monthlyContribution');
const timeInput = document.querySelector('#time');
const interestRateInput = document.querySelector('#interestRate');
const result = document.querySelector('#results');
const body = document.querySelector('body')

//reading values
function readValue(input) {
	return Number(input.value);
}

button.addEventListener('click', () => {
	eventHandler()
});

body.addEventListener('keypress', function(event){
	if (event.key === "Enter") {
		eventHandler()
}})


function eventHandler() {
	const initialInvestmentValue = readValue(initialInvestmentInput);
	const monthlyContributionValue = readValue(monthlyContributionInput);
	const timeValue = readValue(timeInput);
	const interestRateValue = readValue(interestRateInput);

	createTable(
		initialInvestmentValue,
		monthlyContributionValue,
		interestRateValue,
		timeValue
	)}
	
function createTable(initial, monthly, interest, years) {
	result.innerHTML = '';

	const errorMessage = document.createElement('div');
	errorMessage.className = 'errorMessage';

	if (initial < 0) {
		errorMessage.textContent = 'Initial value must be greater than zero.';
		result.appendChild(errorMessage);
	} else if (monthly < 0) {
		errorMessage.textContent =
			'Monthly contribution must be greater than zero.';
		result.appendChild(errorMessage);
	} else if (years <= 0) {
		errorMessage.textContent = 'Minimum investment time is 1 year.';
		result.appendChild(errorMessage);
	} else if (interest <= 0) {
		errorMessage.textContent =
			'Monthly contribution must be greater than zero.';
		result.appendChild(errorMessage);
	} else if (initial <= 0 && monthly <= 0) {
		errorMessage.textContent =
			'Initial investment OR monthly contribution must be greater than zero.';
		result.appendChild(errorMessage);
	} else {
		const table = document.createElement('table');
		table.className = 'investmentTable';
		result.appendChild(table);
		table.innerHTML = `<tr>
      <th class='table-head'>Years</th>
      <th class='table-head'>Investment Value (${interest}%)</th>
      <th class='table-head'>Total contribution</th>
    </tr>`;

		let totalContribution = initial;
		let totalValue = initial;
		let rate = interest / 100;

		for (let i = 0; i <= years; i++) {
			if (i > 0) {
				let contributionInAYear = monthly * 12;
				totalContribution += monthly * 12;
				totalValue = (totalValue + contributionInAYear) * (1 + rate);
			}

			table.innerHTML += `
		<tr>
		    <td>${i}</td>
		    <td>${totalValue.toFixed(2)}</td>
				<td>${totalContribution.toFixed(2)}</td>

		  </tr>`;
		}
	}
}
