const string = 'A village is a clustered human settlement or community, larger than a hamlet but smaller than a town, with a population typically ranging from a few hundred to a few thousand. Though villages are often located in rural areas, the term urban village is also applied to certain urban neighborhoods.';

const NumberOfLetter = string.length;
console.log('Number of Letter in this string is  = ',NumberOfLetter);

let count = 0;
for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element==" " && string[i-1]!=" ") {
        count++;
    }    
}
count = count+1;// 1ta word kom count korey, tai 1jog korty hoi
console.log('total word is = ',count);