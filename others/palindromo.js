
let input = 'luzazul';

function isPalindrome(word) {

    let result = true;

    for (let x = 0; x < word.length; x++) {

        console.log(`${word[x]} and ${word[word.length - 1 - x]}`);
        if (word[x] != word[word.length - 1 - x]) {

            result = false;
        }

    }


    console.log(result);
}

isPalindrome(input);