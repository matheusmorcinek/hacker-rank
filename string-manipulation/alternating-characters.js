function alternatingCharacters(value, count = 0) {

    if (!value) {
        return 0;
    }

    if (value.length === 1) {
        return count;
    }

    let deletions = 0;
    for (let index = 0; index < value.length; index++) {
        if (value[index] === value[index + 1]) {
            deletions++;
        }
    }
    
    return deletions;
}

console.log(alternatingCharacters('AAABBB'));