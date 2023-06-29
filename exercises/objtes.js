// Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  };

let keys = Object.keys(vehicle);
console.log(keys);

// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };
  
  let nestPerson = Object.entries(person);
  console.log(nestPerson);
  // Expected output:
  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// Write code that does the reverse, starting from a nested array of pairs and building an object.

  let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
  let persons = Object.fromEntries(nestedArray);
  console.log(persons);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }