/*Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.*/
/*for (let i = 0; i < 10; i++){
    console.log(catAge(i));
    
}*/

function catAge(humanyears) {
    if (humanyears === 0 ){
        return 0;
    }
    else if (humanyears === 1) {
        return 15;
    }
    else if (humanyears === 2) {
        return 24
    }
    else {
        return 24 + (4 * (humanyears-2));
    } 
}

function removeLastChar(string) {
    let stringArr = string.split('');
    stringArr.pop();
    return stringArr.join('');
}

console.log(removeLastChar('Ciao!'));