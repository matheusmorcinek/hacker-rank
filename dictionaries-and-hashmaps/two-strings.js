
let s1 = 'xxx';
let s2 = 'art';

function twoStrings(s1, s2) {

    let dict1 = {};
    let result = 'NO';

    s1.split('').forEach(letter => {

        if (!dict1[letter.charCodeAt(0)]) {

            dict1[letter.charCodeAt(0)] = 1;
        }
    });

    s2.split('').some(letter => {
        
        if (dict1[letter.charCodeAt(0)]) {

            result = 'YES';
            return true;
        }
    });

    return result;
}

twoStrings(s1, s2);