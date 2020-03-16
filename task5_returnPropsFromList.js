/*ЗАДАЧА 5*/

const filterObject = (arrStr, myObject) => {
    return Object.fromEntries(
        Object.entries(myObject).filter(([element]) => arrStr.includes(element))
    );
};

console.log(filterObject(["id", "name"],{ id: 33, status: "Unemployed", married: true, name: "Arthur" }));
