let array = [1,2,3,4,11,33,5,6,7,8,9,11,22,33,55,67,3]
let UniqueArray = [];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let position = UniqueArray.indexOf(element);
    if (position==-1) {
        UniqueArray.push(element);
    }
   
}
console.log('unique array is = ',UniqueArray);


