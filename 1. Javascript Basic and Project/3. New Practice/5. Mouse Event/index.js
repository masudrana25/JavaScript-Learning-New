const p1 = document.querySelector('.div1_class');

//p1.addEventListener('click', (e) => {
  //console.log(e);
  //console.log(e.target);
  //console.log(e.target.id);
  //console.log(e.target.className);
  //console.log(e.target.innerHTML);
  //console.log(e.target.textContent);
  //console.log(e.target.innerText);

  //console.log('clicked');
//});

// p1.addEventListener('dblclick', () => {
//   console.log('double clicked');
// });

//mouseup means  click with mouse in the element
//mousedown means release the click with mouse in the element

// p1.addEventListener('mouseup', () => {
//   console.log('mouse up is occurred');
// });
// p1.addEventListener('mousedown', () => {
//   console.log('mouse down is occurred');
// });

//mouseenter means hover mouse in the element
//mouseleave means release hover mouse in the element

// p1.addEventListener('mouseenter', () => {
//   console.log('mouse up is occurred');
// });
// p1.addEventListener('mouseleave', () => {
//   console.log('mouse down is occurred');
// });

//mousemove means move mouse in the element and it's call many times
//p1.addEventListener('mousemove', (e) => {
  //with respect to window
  //  console.log('clientX = ' + e.clientX + ' clientY = ' + e.clientY);

  //with respect to own element
  //  console.log('offsetX = ' + e.offsetX + ' offsetY = ' + e.offsetY);

  //console.log('mouse move is occurred');
//});

//mouseover means take the mouse in the element , it's call for one time
// p1.addEventListener('mouseover', () => {
//   console.log('mouse over is occurred');
// });



// {{{{{{{{{{ Button Handler }}}}}}}}}}

const buttonsNodeList = document.querySelectorAll('.btn'); // here "buttons" is a NodeList which is note array
//console.log(buttonsNodeList);
 
// convert NodeList to Array
const buttonsArrayList = Array.from(buttonsNodeList);
//console.log(buttonsArrayList);

buttonsArrayList.map((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.innerText);
  })
});