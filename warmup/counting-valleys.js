/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {

    let level = 0;

    const pathArray = path.split('');

    let valleys = 0;

    pathArray.forEach((unitChange, index) => {

        const previousLevel = level;

        if (unitChange === 'U') {
            level++;
        } else {
            level--;
        };

        if (level === 0) {

            if (previousLevel < 0) { 
                valleys++;
            }
        }
    });
    return valleys;
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'));

// 'DDUUDDUDUUUD'

// 0
// `
// D -1
// D -2
// U -1
// U 0 check
// D -1
// D -2
// U -1
// D -2
// U -1
// U 0 check
// U 1
// D 0 check
// `

// expected 2




// 'UDDDUDUU'
// 0
// ` 
// U 1
// D 0    check - e nao conta
// D -1
// D -2
// U -1
// D -2
// U -1
// U 0 check
// `
//  res 1


// 'UDUUUDUDDD'
// 0
// `
// U 1
// D 0 check
// U 1
// U 2
// U 3
// D 2
// U 3
// D 2
// D 1
// D 0 check
// `