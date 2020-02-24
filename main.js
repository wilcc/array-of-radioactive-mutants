/******************
 * YOUR CODE HERE *
 ******************/

function changeLast(array,newValue){
  array.pop()
  array.push(newValue)
}
function addMeToEnd(array){
  array.push('Colin')
}
function addMeToStart(array){
  array.unshift('Colin')
}
function changeAllValuesTo(array,value){
  
  for (let i = 0; i < array.length ; i++){
    array.shift()
    array.push(value)
  }
}


function oddOrEven(array){
  for (let i = 0; i < array.length ; i++){
    if (array[i] % 2 === 0){
      array[i] = 'even'
      
    }else array[i]= 'odd'
}}

function changeNextThreeToValue(start,arr,value){
  arr.splice(start,3,value,value,value)
  
}

// function changeAllValuesTo(){
  
// }
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}