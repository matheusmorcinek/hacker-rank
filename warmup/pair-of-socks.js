

// 10 20 20 10 10 30 50 10 20  

const array = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(array) {

    // const tempSet = new Set(array);
    const tempMap = new Map();

    let pairs = 0;

    array.forEach(element => {

        if (tempMap.get(element) === undefined) {
            tempMap.set(element, 1);
            return;
        }

        pairs++;
        tempMap.delete(element);
    });

    return pairs;
}


sockMerchant(array);