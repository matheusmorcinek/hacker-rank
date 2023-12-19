


// 'abcacabcac'.split('').filter(letter => letter === 'a').length

//aba 10 = 7

function repeatedString(word, lettersCount) {

    if(word === 'a') {
        return lettersCount;
    };

    const letterAOccurrences = word.split('').filter(letter => letter === 'a').length;

    const result = Math.floor((lettersCount / word.length) * letterAOccurrences);

    return result;
}

 const word = 'babbaabbabaababaaabbbbbbbababbbabbbababaabbbbaaaaabbaababaaabaabbabababaabaabbbababaabbabbbababbaabb';
// a 46 
const letters = '860622337747';
//395886275361

//395886275363,62


// input jdiacikk
// input 899491
// expected 112436



// const word = 'gfcaaaecbg';
// const letters = '547602';
//164280 

//164280,6


console.log(repeatedString(word, letters));




// gfcaaaecbg 10

// 'aaa' 3


