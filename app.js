const http = require('http');

http.createServer(function(req,res){
	res.write("This is the server");
	res.end();
}
).listen(3000);

console.log("server started on 3000");

