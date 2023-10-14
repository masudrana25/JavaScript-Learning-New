A=[4,5,6,7,8,9];
//Map 
map_Of_A = A.map(x=>x*x); // map j kono mathematical kaj korty parey.
console.log('map element of A is = ' + map_Of_A);

// Filter

filter_of_A = A.filter(x => x>6); // 6 thekey boro sob gula element dekhabey.
console.log('filter element of A is = ' + filter_of_A);

//Find
find_of_A= A.find(x=>x>6); // just j element ta 6 thekey boro sei 1st element ta dekhabey.
console.log('find element of A is = ' + find_of_A);


object_array=[
    {id:2,name:'abir'},
    {id:3,name:'Johid'},
    {id:4,name:'Tohid'},
    {id:5,name:'Saon'},
    {id:6,name:'Tutul'},
    {id:8,name:'Mosta'},
    {id:9,name:'Jodu'},
    {id:12,name:'Ajima'},
    {id:112,name:'Masud'},

]

// Name_Array_of_object_array = [];

// for (let i = 0; i < object_array.length; i++) {
//     const Name_Array_of_object_array = object_array[i].name;
//     return Name_Array_of_object_array;
    
// }
// console.log(Name_Array_of_object_array);


//by using map

Name=object_array.map(s=>s.name); //object_array thekey sob gula name 'Name' array ar moddhy dekhabey
console.log('Name OF object_array = '+ Name);

ID=object_array.map(s=>s.id); //object_array thekey sob gula name 'ID' array ar moddhy dekhabey
console.log('ID OF object_array = '+ID);

//by using Filter

filter_Name=object_array.filter(s => s.id > 10); //object_array thekey jar id 5 ar thekey besi sei gula 'filter_Name' ar moddhy dekhaby
console.log('filter_Name OF object_array = '+ filter_Name);

