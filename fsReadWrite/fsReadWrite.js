const f = require("fs");
f.readdir("/home",(err,files)=>{
  let arrayExceptMe = [];
  files.forEach(ele=>{
    if (ele != "ming") {
      arrayExceptMe.push(ele);
    }});
  f.writeFile("./arrayExceptMe",arrayExceptMe);
});
