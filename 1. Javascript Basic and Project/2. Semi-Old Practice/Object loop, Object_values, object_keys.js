const countryDetails = {
  Bangladesh: 'Dhaka',
  India: 'Dilhi',
  USA: 'Wasinghton',
  Thailand: 'Bankkok',
  Nepal: 'Katmandu',
  Rasia: 'Mosko'
};

// For Loop in Object

//Object er First property Access
for (name in countryDetails) {
  console.log('country name is : '+name);
};

// Object er Second property Access
for (name in countryDetails) {
  console.log('Capital Name is : '+countryDetails[name]);
};

console.log('New style Object.values and Object.keys');

//Object er sob gula key property niye akta new object create
const countryName = Object.keys(countryDetails);
console.log('country name is : ' + countryName);
console.log(typeof(countryName));

//Object er sob gula value property niye akta new object create
const capitalName = Object.values(countryDetails);
console.log('capital name is : ' + capitalName);
console.log(typeof(capitalName));

//map in object
console.log('map in object');

Object.keys(countryDetails).map(function (country) {
  const detailsInOneCountry = `Country is: ${country} and capital is : ${countryDetails[country]}`;
  console.log(detailsInOneCountry);
})



