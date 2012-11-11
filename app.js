var app = require('http').createServer(handler)
	, io = require('socket.io').listen(app)
	, fs = require('fs')
	, url = require('url')
//	, jquery = require('jquery')

app.listen(8000);

function handler(req, res) {
	var request = url.parse(req.url, true);
	var action = request.pathname;
	/* ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
	// resource:
	// first.html, index2.html, design.js, audio.js, click.js,
	// /sound/C1.ogg, /sound/C2.ogg, /sound/C3.ogg
	// ToDo set up default index.html, routing Javascript
	★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・ */
	if (action == '/') {
		fs.readFile(__dirname + '/first.html',
			function (err, data) {
				if (err) {
					res.writeHead(500);
					return res.end('Error loading index.html');
				}
				res.writeHead(200);
				res.end(data);
			});
	} else if (action == '/index2.html') {
		fs.readFile(__dirname + '/index2.html',
			function (err, data) {
				if (err) {
					res.writeHead(500);
					return res.end('Error loading index2.html');
				}
				res.writeHead(200);
				res.end(data);
			});
	} else if (action == '/design.js') {
		var designJs = fs.readFileSync('./design.js');
		res.writeHead(200, {'Content-Type':'application/x-javascript' });
		res.end(designJs, 'utf8');
	} else if (action == '/audio.js') {
		var audioJs = fs.readFileSync('./audio.js');
		res.writeHead(200, {'Content-Type':'application/x-javascript' });
		res.end(audioJs, 'utf8');
	} else if (action == '/click.js') {
		var clickJs = fs.readFileSync('./click.js');
		res.writeHead(200, {'Content-Type':'application/x-javascript' });
		res.end(clickJs, 'utf8');
	}else if (action == '/sound/se01.ogg') {
		var seOgg1 = fs.readFileSync('./sound/se01.ogg');
		res.writeHead(200, {'Content-Type':'audio/ogg' });
		res.end(seOgg1, 'binary');
	}else if (action == '/sound/se02.ogg') {
		var seOgg2 = fs.readFileSync('./sound/se02.ogg');
		res.writeHead(200, {'Content-Type':'audio/ogg' });
		res.end(seOgg2, 'binary');
	}else if (action == '/sound/se03.ogg') {
		var seOgg3 = fs.readFileSync('./sound/se03.ogg');
		res.writeHead(200, {'Content-Type':'audio/ogg' });
		res.end(seOgg3, 'binary');
	}
}

io.sockets.on('connection', function (socket) {
	socket.emit('resDisply', { disply:'start'});
	socket.on('soundEffect1', function (data) {
		socket.emit('resSoundEffect1', { effect:'se01' });
		console.log(data);
	});
	socket.on('soundEffect2', function (data) {
		socket.emit('resSoundEffect2', { effect:'se02' });
		console.log(data);
	});
	socket.on('soundEffect3', function (data) {
		socket.emit('resSoundEffect3', { effect:'se03' });
		console.log(data);
	});
	socket.on('disconnect', function(){
		logging(socket.id);
	});
	logging(socket.id);
});


function logging($socketId){
	var now =  Math.round(new Date().getTime() / 1000);

	console.log($socketId);
	console.log(now);
	var http = require('http');
	var logApi  = http.get(
		{
			"host"  : 'coronet-internet.com',
			"port"  : 80,
			"path"  : "/hackathone/" + $socketId + "/" + now  + "/log.html"
		},
		function(res) {
			console.log("Got response: " + res.statusCode);
		}
	);
	logApi.on('error', function(e){
		console.log(e);
	})
}