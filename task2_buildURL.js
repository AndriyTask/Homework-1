/*ЗАДАЧА2*/

let myArray = ["user", "cjh432ujfj3igje", "friends"];
let convertArrayToString = myArray.join("/");

let queryParam = new URLSearchParams({
  limit: 20,
  offset: 0,
  query: "Gary"
});
let convertObjectToString = queryParam.toString();

// Побудова шляху і параметрів має відбуватись усередині функції, а не до неї.

let buildMyUrl = (myDomain, myPath, myQuery)=>{
  if (myQuery === undefined) {
      console.log(`${myDomain}/${myPath}`);
  } else if (myPath === undefined) {
      console.log(`${myDomain}/${myQuery}`);
  } else{
      console.log(`${myDomain}/${myPath}/${myQuery}`);
  }
};

buildMyUrl("http://www.google.com.ua", convertArrayToString , convertObjectToString);

