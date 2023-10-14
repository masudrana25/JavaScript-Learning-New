const country = ' My Country Name is Bangladesh which is very beutiful.';

console.log('case sensitive, i use kori nai. tai pacchy na "Country" k khujey : '+country.match(/country/));
console.log(' i use korsi, tai case sensitive hby na : '+country.match(/country/i));

console.log('first is ta khujey ber korbey : '+country.match(/is/));
console.log('sob gula "is" khujey ber korbey : '+country.match(/is/g));

console.log('case sensitivity and global search aksathy : '+country.match(/Is/ig));

//replace any string value 
const newCountry = country.replace(/bangladesh/ig, 'India');
console.log(newCountry);
