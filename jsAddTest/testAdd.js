const addNum = require("./addFunc.js");
const testFunc = (addOne,addTwo) => {
  if (addNum(addOne,addTwo) == (addOne+addTwo)){
    console.log("correct");
  }else{
    console.log("wrong");
  }
}
testFunc(1,3);
testFunc(4,8);
testFunc(20,38);
testFunc(2,6);
