
function minimumSwaps(array) {

    let swaps = 0;

    for (let index = 0; index < array.length; index++) {

        const currentValue = array[index];
        const currentPosition = index + 1;

        //is the current value in the correct position?
        if (currentValue != currentPosition) {

            let positionToSwap;
            //who should be here?
            for (let x = 0; x < array.length; x++) {

                if (currentPosition == array[x]) {
                    positionToSwap = x;
                    break;
                }
            }

            array[index] = array[positionToSwap];
            array[positionToSwap] = currentValue;
            swaps++;
        }
    }
    
    return swaps;
}



console.log(minimumSwaps(arr));