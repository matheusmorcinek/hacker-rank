
const input =
    [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]];

//output 19       

//   0  1  2  3  4  5               
//0 [1, 1, 1, 0, 0, 0],     00 01 02
//1 [0, 1, 0, 0, 0, 0],     10 11 12 
//2 [1, 1, 1, 0, 0, 0],     20 21 22 
//3 [0, 0, 2, 4, 4, 0],
//4 [0, 0, 0, 2, 0, 0],
//5 [0, 0, 1, 2, 4, 0]

// Complete the hourglassSum function below.
function hourglassSum(array) {

    let values = [];

    for (let x = 0; x < array.length - 2; x++) {

        for (let y = 0; y < array.length - 2; y++) {

            if (array[x + 2][y + 2] === undefined) {

                break;
            } else {

                let sum = array[x][y] + array[x][y + 1] + array[x][y + 2] +
                    array[x + 1][y + 1] +
                    array[x + 2][y] + array[x + 2][y + 1] + array[x + 2][y + 2];

                values.push(sum);
            }
        }
    }

    return values.reduce((acc, cur) => {
        return Math.max(acc, cur);
    });
}

hourglassSum(input);