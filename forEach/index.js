/**
 * forEach() = method used to iterater over the elements\
 *              of an array and apply a  specified f(x) 
 *              callback to each element
 * 
 *              array.forEach(callback)
 * 
 *  element,index,array are provided
 */


let numbers=[1,2,3,4,5]


numbers.forEach(display)

function display(element){
    console.log(element);
}