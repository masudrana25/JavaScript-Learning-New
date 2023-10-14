//Smallest Word in a array
function tinyFriend(Name_Array){
    for (let i = 0; i < Name_Array.length; i++) {
        var min_letter=Name_Array[0];
        var element = Name_Array[i];
        var letter=element.length;
        if (letter<min_letter.length) {
            min_letter=element;
        }
    }
    return min_letter;
}

var Choto_Name = tinyFriend(['masud','Abdul ALim','SABBIR','rifa']);
console.log(Choto_Name);