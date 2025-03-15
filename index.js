const express=require("express");
const app=express();
let port=8080;
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});

const path=require("path");

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});