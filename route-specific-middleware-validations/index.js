let express = require('express');
let bodyParser =require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
let app = express();
app.engine(".hbs", exphbs({
defaultLayout: "main",
extname: ".hbs",
layoutsDir: path.join(__dirname, "views/layouts")
}));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser());
var validateget= function(req, res, next) {
	let usname=req.query.uname;
	if(usname.length<8|!usname)
	{
		res.render("home");
	}
	next();
	}
var validatepost= function(req, res, next) {
	let disname= req.body.dname;
	if(disname.length<8|!disname)
	{
		next(err);
	}
	next();
	}

app.get('/',validateget,function (req, res) {
	res.send("hello from get");
});
app.post('/',validatepost,function (req, res) {
	res.send("hello from post");
});
app.use((err,req,res,next)=>
{
if(err)
{
	res.render("home1");
}
});

app.listen(3000,() => console.log('Example app listening on port 3000!'));