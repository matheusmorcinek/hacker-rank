

function rotLeft(array, rotationNumber) {

    if (rotationNumber >= 1) {
        
        let firstValue = array[0];
        
        array = array.splice(1,array.length - 1);
        array = [...array, firstValue];
        
       return rotLeft(array, rotationNumber - 1);
    }
    
    return array
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
//              1 2 3 4 5
//              2 3 4 5 1             
//              3 4 5 1 2
//              4 5 1 2 3
//expected      5 1 2 3 4
