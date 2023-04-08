const fs = require("fs");
const bioData = {
  name: "vinod",
  age: 26,
  channel: "thapa technical",
};

// 1: convert to JSON 
// 2: dusre file me add krdena 
// 3: readfile
// 4: again convert back to js obj ori
// 5: console.log

const data = JSON.stringify(bioData); 

//fs.writeFile("json1.json",data,(err)=>{console.log("done");});

fs.readFile('json1.json','utf-8',(err,data)=>{
    //console.log(data);
    const orgdata=  JSON.parse(data);
    console.log(data);
    console.log(orgdata);
});








