// 1. Feet to Mile Calculation 
function feetToMile(feet) {
    if (feet < 0) {
        console.log('Enter a valid feet number .')
    } else {
        Mile = 0.000189 * feet;
        console.log(feet + ' feet is equal to ' + Mile + ' Mile');
    }

}
feetToMile(100000);


// 2. Wood Calculation 
function woodCalculator(Chair, Table, Bed) {
    if (Chair < 0 || Table < 0 || Bed < 0) {
        console.log('Enter a valid input.');
    } else {
        WoodForOneChair = 12;
        WoodForOneTable = 30;
        WoodForOneBed = 70;
        TotalChairWood = Chair * WoodForOneChair;
        TotalTableWood = Table * WoodForOneTable;
        TotalBedWood = Bed * WoodForOneBed;
        TotalWood = TotalChairWood + TotalTableWood + TotalBedWood;
        console.log('Total Wood Required is ' + TotalWood + ' cft');
    }
}
woodCalculator(2, 3, 4);

// 3. Brick Calculation in Building Work
function brickCalculator(n_th_building) {
    if (n_th_building < 0) {
        console.log('N th Building Value Cannot be Negative ');
    } else {
        if (n_th_building <= 10) {
            BrickNeed = n_th_building * 15 * 1000;
            console.log('Brick Required for this Building is ' + BrickNeed);
        }
        else if (n_th_building <= 20) {
            BrickNeed1 = 10 * 15 * 1000;
            BrickNeed2 = (n_th_building - 10) * 12 * 1000;
            BrickNeed = BrickNeed1 + BrickNeed2;
            console.log('Brick Required for this Building is ' + BrickNeed);
        }
        else {
            BrickNeed1 = 10 * 15 * 1000;
            BrickNeed2 = 10 * 12 * 1000;
            BrickNeed3 = (n_th_building - 20) * 10 * 1000;
            BrickNeed = BrickNeed1 + BrickNeed2 + BrickNeed3;
            console.log('Brick Required for this Building is ' + BrickNeed);
        }
    }
}
brickCalculator(-5);
brickCalculator(7);
brickCalculator(17);
brickCalculator(27);


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