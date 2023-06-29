let rlSync = require('readline-sync');
let age = Number(rlSync.question("What's your age?\n"));
console.log('You are '+age+' years old.');
console.log(`in 10 years, you will be ${age+10} years old.`);
console.log(`in 20 years, you will be ${age+20} years old.`);
console.log(`in 30 years, you will be ${age+30} years old.`);
console.log(`in 40 years, you will be ${age+40} years old.`);