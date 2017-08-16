const e = require("express");
const app = e();
const f = require("fs");
app.listen(3611);
app.get("/",(req,res) => {
  let namesNotMe = [];
  f.readdir("/home",
    (err,files)=>{
      files.forEach(oneFile=>{
        if (oneFile != "ming") {
          namesNotMe.push(oneFile);
        }
      });
  res.send(namesNotMe);
    },);
});

