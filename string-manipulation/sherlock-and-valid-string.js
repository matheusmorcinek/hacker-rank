


// const input = 'abc';
// const input = 'abcc';
// const input = 'abccc';
// const input = 'abccc';
// const input = 'aabbcd'; //NO
// const input = 'aabbccddeefghi'; //NO
// const input = 'abcdefghhgfedecba'; //YES
// const input = 'aabbccddeefghi'; //NO
const input = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
//YES

// We are limited to removing only one character, so  is invalid.
function isValid(text) {

    const lettersArray = text.split('');
    const lettersMap = new Map()

    for (const letter of lettersArray) {

        if (!lettersMap.get(letter)) {
            lettersMap.set(letter, 1);
            continue;
        };

        lettersMap.set(letter, lettersMap.get(letter) + 1);
    };

    const lettersOccurrencesSet = new Set(lettersMap.values());

    if (lettersOccurrencesSet.size === 1) {
        return 'YES';
    };

    if (lettersOccurrencesSet.size > 2) {
        return 'NO';
    };

    let result = canFix([...lettersMap.values()], 'YES');

    return result;
};


function canFix(array, result, changes = 0) {

    let mainOccurrence = array[0];

    for (let index = 1; index < array.length; index++) {

        const value = array[index];

        if (value === mainOccurrence) {
            continue;
        };

        if (changes === 0 && ((value + 1) === mainOccurrence || (value - 1) === mainOccurrence || (value - 1) === 0)) {
            changes++;
            continue;
        };

        result = 'NO';
        break;
    }

    return result;
}

console.log(isValid(input));



