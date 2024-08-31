function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let prefix = strs[0];

    prefix = prefix.split('').map((char, i) => {
        return strs.every(str => str[i] === char) ? char : '';
    }).join('');

    return prefix;
}
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // "