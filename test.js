var express = require('express')
var app = express()
app.get('/contact.html',function (req,res) {
	res.sendFile( __dirname + "/" + "contact.html");
});
//app.get('/details',function (req,res) {
	//res.send('username:'+req.query.username+ '/email'+req.query.email+'/password'+req.query.password);
//});
app.get('/about.html',function (req,res) {
	res.sendFile( __dirname + "/" + "about.html");
});
app.get('/home.html',function (req,res) {
	res.sendFile( __dirname + "/" + "home.html");
});

app.listen(3000);