const button = document.querySelector('#calculate');
const initialInvestmentInput = document.querySelector('#initialInvestment');
const monthlyContributionInput = document.querySelector('#monthlyContribution');
const timeInput = document.querySelector('#time');
const interestRateInput = document.querySelector('#interestRate');
const result = document.querySelector('#results');

//reading values
function readValue(input) {
	return Number(input.value)
}


button.addEventListener('click', () => {
	const initialInvestmentValue = readValue(initialInvestmentInput)
	const monthlyContributionValue = readValue(monthlyContributionInput)
	const timeValue = readValue(timeInput);
	const interestRateValue = readValue(interestRateInput)
	const contribution = calculateContributionAfterOneYear(monthlyContributionValue, initialInvestmentValue)
	createTable(interestRateValue, contribution);

});

function calculateInvestmentValue(initial, monthly, interest, time) {
	let rate = interest / 100;
  let contributionsInAYear = monthly * 12
	let result = initial * (1 + rate) ** time + contributionsInAYear * (((1 + rate) ** time - 1) / rate)
	return result.toFixed(2)
}

function calculateContributionAfterOneYear(monthly, initial) {
	let totalContribution = monthly * 12  + initial
	return totalContribution
}


function calculateInvestmentValueAfterOneYear(initial, monthly, interest) {
	let rate = interest / 100
	let contributionInAYear = monthly * 12;
	let result = initial * (1 + rate) + contributionInAYear * (1 + rate)
	return result.toFixed(2)
}





function createTable(interest, contribution) {
	result.innerHTML = '';
	const table = document.createElement('table')
	table.className = 'investmentTable'
	result.appendChild(table)
	table.innerHTML = `<tr>
      <th>Years</th>
      <th>Investment Value ${interest}%</th>
      <th>Total contribution</th>
    </tr>
    <tr>
      <td>value1</td>
      <td>value2</td>
      <td>${contribution}</td>
    </tr>
    <tr>
      <td>value4</td>
      <td>value5</td>
      <td>value6</td>
    </tr>`
}

