/*ЗАДАЧА 3*/

let myArr = [3, 8, 1, "Банан", 5, 3, "Банан", 5, 8, "Мандарин"];

let deleteDuplicates =(myArr)=> {
    // Рішення ок, ще як варіант можна було використати Set.
    return myArr.filter((item,index,array)=>array.indexOf(item)===index);
}

console.log(deleteDuplicates(myArr));
