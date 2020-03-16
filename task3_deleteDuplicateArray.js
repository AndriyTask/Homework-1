/*ЗАДАЧА 3*/

let myArr = [3, 8, 1, "Банан", 5, 3, "Банан", 5, 8, "Мандарин"];

let deleteDuplicates =(myArr)=> {
    return myArr.filter((item,index,array)=>array.indexOf(item)===index);
}

console.log(deleteDuplicates(myArr));
