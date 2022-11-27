function swapTwo(array, a, b) {
    array = array.slice();
    array[array.indexOf(a)] = b;
    array[array.lastIndexOf(b)] = a;
    return array;
}
console.log(swapTwo([1,2,3,4,5,9],2,2))
