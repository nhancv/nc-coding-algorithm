function isIncreasingDigitsSequence(n) {
    const str = `${n}`;

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            const a = parseInt(str[i]);
            const b = parseInt(str[j]);
            if(a >= b) {
                return false;
            }
        }
    }
    return true;
}

const res = isIncreasingDigitsSequence(12345);
console.log(res);
