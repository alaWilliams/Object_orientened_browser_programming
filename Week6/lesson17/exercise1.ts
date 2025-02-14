interface User {
	name: string;
	age: number;
}
const users = [
	{
		name: 'John',
		age: 33,
	},
	{
		name: 'Maxine',
		age: 24,
	},
	{
		name: 'Ted',
		age: 12,
	},
];

// function checkAge(user) {
// 	return user.age >= ageLimit;
// }
// checkAge(users[0]);
// checkAge(users[1]);
// checkAge(users[2]);

// Here is code where function checkAge is used to check the age of users if it passes a limit. Modify the checkAge function to be pure.

function pureCheckAge(userAge : number, ageLimit : number) {
  return userAge >= ageLimit
}

console.log(users.map(element => pureCheckAge(element.age, 18)))