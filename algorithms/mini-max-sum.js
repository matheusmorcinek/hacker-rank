
let arr = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {

    let min = Number.MAX_VALUE;
    let max = 0;

    arr.forEach((value, i) => {

        let sum = arr.reduce((previousValue, currentValue, index) => {

            if (i == index) {
                
                return previousValue;
            }

            return previousValue + currentValue;
        }, 0);

        if (sum < min) {
            min = sum;
        }

        if (sum > max) {
            max = sum;
        }
    });

    console.log(`${min} ${max}`);
}

miniMaxSum(arr);