// Bangladesh Standard Time

var automaticDate = new Date();
console.log(automaticDate);

var dateModified = new Date('1971-12-16:06:8:30-06:00');
console.log(dateModified);

//Sunday = 0, Monday =1 , Tuesday = 2, "Wednesday" = 3, "Thursday" = 4, "Friday" = 5, "Saturday" = 6;

var nameOfDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//function for setting time format with am and pm
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    const sec = date.getSeconds();
    var dayInNumber=date.getDay();
    var OriginalDay = nameOfDays[dayInNumber];
    const yearNow = date.getFullYear();
    //condition for hours maintain
    if (hours>12) {
        hours = hours % 12;
        var ampm = "pm";
    }
    else{
       var ampm = "am"
    }
    //condition for minutes maintain
    if (minutes<10) {
        minutes = "0"+minutes;
    }
    var time='Today is '+ OriginalDay +' and ' +'Present time is ' + hours + ':' + minutes +':'+ sec+' '+ ampm + ' , ' + yearNow;
    return time;
  }
  
var presentTime = formatAMPM(automaticDate);
var modifiedTimeShow = formatAMPM(dateModified);
console.log(presentTime);
console.log(modifiedTimeShow);



// Banglai date
const daaatee = new Date();
const banglaDate = daaatee.toLocaleDateString('bn-BD',{day:'numeric',month:'long',year:'numeric', hour:'numeric',minute:'numeric',second:'numeric'});
console.log(banglaDate);


  

