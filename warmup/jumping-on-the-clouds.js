

//0 0 0 0 1 0

// const array = [0, 0, 0, 0, 1, 0]; //3
// const array = [0, 1, 0, 0, 0, 1, 0]; //3
const array = [0, 0, 1, 0, 0, 1, 0]; //4

function jumpingOnClouds(array) {

    let jumps = 0;

    for (let index = 0; index < array.length; index++) {

        const nextCloud = array[index + 1];
        const postNextCloud = array[index + 2];

        //finished
        if (nextCloud === undefined) {
            continue;
        }

        //0, 1 
        if (nextCloud === 1 && postNextCloud === undefined) {
            continue;
        }

        //0, 1, 0, precisamos e podemos
        // 0, 0, 0, podemos
        if (postNextCloud === 0) {
            jumps++;
            index++;
            continue;
        }

        //0, 0
        //// 0, 0, 1, n pode
        if (nextCloud === 0 && (postNextCloud === undefined || postNextCloud === 1)) {
            jumps++;
            continue;
        }
    }

    return jumps;
}

console.log(jumpingOnClouds(array));