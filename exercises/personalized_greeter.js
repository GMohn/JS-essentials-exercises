let rlSync = require('readline-sync');
let getName = () => {
  let firstName = rlSync.question("What's your first name?\n");
	let lastName = rlSync.question("What's your last name?\n");
	return firstName +` `+ lastName;
}
console.log(`Good Morning, ${getName()}!`);