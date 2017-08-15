const addNum = require("./addFunc.js");
const testFunc = (addOne,addTwo,correctAns) => {
  if (addNum(addOne,addTwo) == correctAns){
    console.log("correct");
  }else{
    console.log("wrong");
  }
}
testFunc(1,3,4);
testFunc(4,8,12);
testFunc(20,38,58);
testFunc(2,6,8);
