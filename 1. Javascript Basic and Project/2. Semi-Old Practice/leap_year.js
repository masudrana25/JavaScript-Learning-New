function CheckLeapYear(year){
    if ((year%4==0) && (year%100!=0) || (year%400==0)) {
        console.log(year+' is a Leap year');
    }else{
        console.log(year+' is not a Leap year');
    }
}

var Y1900=CheckLeapYear(1900);
var Y2000= CheckLeapYear(2000);
