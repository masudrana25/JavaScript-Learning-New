const globalVariable_1 = 33; //ai variable k j kono jaigai paouya jaby

//global function == ai nicher function ta global function. ai function er moddhy kono function likhly seita abar local function hobey.

function GlobalFunction_1(num1, num2) {
  //local variable==function er moddhy const, let, var diye kono variable likhly seita local variable hoi and ai function chara bairey ader k paouya jai na
  const localVariable_1 = num1 + num2;

  //const,let,var na likley seita global variable hoye jai
  globalVariable_2 = num1 - num2;//ai variable k j kono jaigai paouya jaby..

  // variable name er samny window. likley seita global variable hoye jai but js file a kaj korchy na kno jani
   globalVariable_3 = localVariable_1 * globalVariable_2;


// local function == ai nicher function ta k just ai boro function er moddhy e call kora jaby. bairey thekey kora jaby na.

  function LocalFunction_1(a,b) {
    const c = a * b;
    return c;
  }
   const result = LocalFunction_1(5,6)*globalVariable_3;
  return result;
}

console.log(GlobalFunction_1(10, 5));