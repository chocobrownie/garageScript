const f = require("fs");
f.readdir("/home",(err,files)=>{
  let arrayExceptMe = [];
  files.forEach(fileName=>{
    if (fileName != "ming") {
      arrayExceptMe.push(fileName);
    }});
  f.writeFile("./arrayExceptMe",arrayExceptMe);
});
