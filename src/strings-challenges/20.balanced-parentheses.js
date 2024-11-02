const isBalanced=(s)=> {
    const balance = s.split('').reduce((count, char) => {
      if (char === '(') return count + 1;
      if (char === ')') return count > 0 ? count - 1 : -1;
      return count;
    }, 0);
  
    return balance === 0;
  }
  
  console.log(isBalanced("(()())")); // Output: true
  console.log(isBalanced("(()"));    // Output: false
  