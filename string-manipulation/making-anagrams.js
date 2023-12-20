/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

const a = 'cde'; //de
const b = 'dcf'; //df
// //2

// const a = 'fcrxzwscanmligyxyvym'; 1
// const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'; //dc
//30

// const a = 'abcfccccrx';
// const b = 'fccrxxjk';
// const a = 'fccrx'; 2 - 3
// const b = 'fccrx'; 3 
// 5 should be there

// const a = 'xwrvmmlisg fczcanmyyvy'; 1 - 19
// const b = 'xwrvmmlisg jthujlpdoqbbhpmeoke'; 1 1 1 -         18
// 'x w r v l m isg'


// const a = 'ccde'; //cd
// const b = 'dcf'; //dc
// //4

function makeAnagram(a, b) {

    const arrayA = a.split('');
    const arrayB = b.split('');

    var intersection = [];

    const mapA = new Map();
    const mapB = new Map();

    const biggerArrayLength = arrayA.length > arrayB.length ? arrayA.length : arrayB.length;

    for (let index = 0; index < biggerArrayLength; index++) {

        const elementA = arrayA[index];
        const elementB = arrayB[index];

        if (arrayA.includes(elementB) && !intersection.includes(elementB)) {
            intersection.push(elementB);
        };

        if (elementA) {
            if (!mapA.get(elementA)) {
                mapA.set(elementA, 1);
            } else {
                mapA.set(elementA, mapA.get(elementA) + 1);
            };
        };

        if (elementB) {
            if (!mapB.get(elementB)) {
                mapB.set(elementB, 1);
            } else {
                mapB.set(elementB, mapB.get(elementB) + 1);
            };
        };
    };

    let intersectionFixes = 0;

    intersection.forEach(value => {

        const difference = Math.abs(mapA.get(value) - mapB.get(value));
        
        if (difference === 0) {
            intersectionFixes += mapA.get(value) + mapB.get(value);
        } else {
            intersectionFixes += (mapA.get(value) + mapB.get(value)) - difference;
        };
    });

    return (arrayA.length + arrayB.length) - intersectionFixes;
};

console.log(makeAnagram(a, b));
