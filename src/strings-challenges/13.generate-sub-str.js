// Generate All Substrings

const generateAllSubStr=(str)=>{
    // let substrings = [];

    // for (let i = 0; i < str.length; i++) {
    //     for (let j = i + 1; j <= str.length; j++) {
    //       substrings.push(str.slice(i, j))
    //     }
        
    // }
    // return substrings;
   return str.split('').flatMap((_, i) => 
        str.slice(i).split('').map((_, j) => str.slice(i, i + j + 1))
      );
}

console.log(generateAllSubStr('abc'));
