const addNum = require("./addFunc.js");
const testFunc = (a,b) => {
  if (addNum(a,b) == (a+b)){
    console.log("correct");
  }else{
    console.log("wrong");
  }
}
testFunc(1,3);
testFunc(4,8);
testFunc(20,38);
testFunc(2,6);
