//Swap Variable easily
 let a = 3; let b = 8; 
 console.log('before swap '+ 'a= '+a+' and b= '+b);
 [b,a]=[a,b];
 console.log('after swap '+ 'a= '+a+' and b= '+b);


 // other way to swap
 let p = 4; let q = 9;
 console.log('before swap '+ 'p= '+p+' and q= '+q);
 temporaryVariable = p;
 p = q;
 q = temporaryVariable;
 console.log('after swap '+ 'p= '+p+' and q= '+q);

 // other way to swap
 let x = 1; let y = 2;
 console.log('before swap '+ 'x= '+x+' and y= '+y);
 x=x+y;
 y=x-y;
 x=x-y;
 console.log('after swap '+ 'x= '+x+' and y= '+y);