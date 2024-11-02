const intToRoman = (num) => {
  let map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  return map.reduce((roman, [value, symbol]) => {
    const count = Math.floor(num / value);
    num %= value;
    return roman + symbol.repeat(count);
  }, "");
};
console.log(intToRoman(58)); // "LVIII"
