const arrToObj = (array)=>{
    return array.reduce((acc,curr)=>({...acc,...curr}),{})
}

const data =[{a:1},{b:2},{a:3}]

console.log(arrToObj(data));
