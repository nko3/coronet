var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')
    , url = require('url')

app.listen(80);

function handler(req, res) {
    var request = url.parse(req.url, true);
    var action = request.pathname;

    /* ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・
     // resource:
     // first.html, index2.html, design.js, audio.js, click.js,
     // /sound/C1.ogg, /sound/C2.ogg, /sound/C3.ogg
     ★・・・・・・★・・・・・・★・・・・・・★・・・・・・★・・・・・・ */
    switch (action) {
        case  '/':
            fs.readFile(__dirname + '/first.html',
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
            break;
        case  '/index.html':
            fs.readFile(__dirname + '/first.html',
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
            break;
        case  '/index2.html':
            fs.readFile(__dirname + '/index2.html',
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index2.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
            break;
        case '/design.js':
            var designJs = fs.readFileSync('./design.js');
            res.writeHead(200, {'Content-Type':'application/x-javascript' });
            res.end(designJs, 'utf8');
            break;
        case '/audio.js':
            var audioJs = fs.readFileSync('./audio.js');
            res.writeHead(200, {'Content-Type':'application/x-javascript' });
            res.end(audioJs, 'utf8');
            break;
        case '/click.js':
            var clickJs = fs.readFileSync('./click.js');
            res.writeHead(200, {'Content-Type':'application/x-javascript' });
            res.end(clickJs, 'utf8');
            break;
        case '/sound/bgm.ogg':
            var bgOgg = fs.readFileSync('./sound/bgm.ogg');
            res.writeHead(200, {'Content-Type':'audio/ogg' });
            res.end(bgOgg, 'binary');
            break;
        case '/sound/se01.ogg':
            var seOgg1 = fs.readFileSync('./sound/se01.ogg');
            res.writeHead(200, {'Content-Type':'audio/ogg' });
            res.end(seOgg1, 'binary');
            break;
        case '/sound/se02.ogg':
            var seOgg2 = fs.readFileSync('./sound/se02.ogg');
            res.writeHead(200, {'Content-Type':'audio/ogg' });
            res.end(seOgg2, 'binary');
            break;
        case '/sound/se03.ogg':
            var seOgg3 = fs.readFileSync('./sound/se03.ogg');
            res.writeHead(200, {'Content-Type':'audio/ogg' });
            res.end(seOgg3, 'binary');
            break;
        case '/sound/se04.ogg':
            var seOgg4 = fs.readFileSync('./sound/se01.ogg');
            res.writeHead(200, {'Content-Type':'audio/ogg' });
            res.end(seOgg4, 'binary');
            break;
        case '/sound/se05.ogg':
            var seOgg5 = fs.readFileSync('./sound/se02.ogg');
            res.writeHead(200, {'Content-Type':'audio/ogg' });
            res.end(seOgg5, 'binary');
            break;
        case '/sound/se06.ogg':
            var seOgg6 = fs.readFileSync('./sound/se03.ogg');
            res.writeHead(200, {'Content-Type':'audio/ogg' });
            res.end(seOgg6, 'binary');
            break;
        case '/sound/bgm.mp3':
            var bgMp = fs.readFileSync('./sound/bgm.mp3');
            res.writeHead(200, {'Content-Type':'audio/mp3' });
            res.end(bgMp, 'binary');
            break;
        case '/sound/se01.mp3':
            var seMp1 = fs.readFileSync('./sound/se01.mp3');
            res.writeHead(200, {'Content-Type':'audio/mp3' });
            res.end(seMp1, 'binary');
            break;
        case '/sound/se02.mp3':
            var seMp2 = fs.readFileSync('./sound/se02.mp3');
            res.writeHead(200, {'Content-Type':'audio/mp3' });
            res.end(seMp2, 'binary');
            break;
        case '/sound/se03.mp3':
            var seMp3 = fs.readFileSync('./sound/se03.mp3');
            res.writeHead(200, {'Content-Type':'audio/mp3' });
            res.end(seMp3, 'binary');
            break;
        case '/sound/se04.mp3':
            var seMp4 = fs.readFileSync('./sound/se01.mp3');
            res.writeHead(200, {'Content-Type':'audio/mp3' });
            res.end(seMp4, 'binary');
            break;
        case '/sound/se05.mp3':
            var seMp5 = fs.readFileSync('./sound/se02.mp3');
            res.writeHead(200, {'Content-Type':'audio/mp3' });
            res.end(seMp5, 'binary');
            break;
        case '/sound/se06.mp3':
            var seMp6 = fs.readFileSync('./sound/se03.mp3');
            res.writeHead(200, {'Content-Type':'audio/mp3' });
            res.end(seMp6, 'binary');
            break;
        case '/sound/bgm.wav':
            var bgWav = fs.readFileSync('./sound/bgm.wav');
            res.writeHead(200, {'Content-Type':'audio/wav' });
            res.end(bgWav, 'binary');
            break;
        case '/sound/se01.wav':
            var seWav1 = fs.readFileSync('./sound/se01.wav');
            res.writeHead(200, {'Content-Type':'audio/wav' });
            res.end(seWav1, 'binary');
            break;
        case '/sound/se02.wav':
            var seWav2 = fs.readFileSync('./sound/se02.wav');
            res.writeHead(200, {'Content-Type':'audio/wav' });
            res.end(seWav2, 'binary');
            break;
        case '/sound/se03.wav':
            var seWav3 = fs.readFileSync('./sound/se03.wav');
            res.writeHead(200, {'Content-Type':'audio/wav' });
            res.end(seWav3, 'binary');
            break;
        case '/sound/se04.wav':
            var seWav4 = fs.readFileSync('./sound/se01.wav');
            res.writeHead(200, {'Content-Type':'audio/wav' });
            res.end(seWav4, 'binary');
            break;
        case '/sound/se05.wav':
            var seWav5 = fs.readFileSync('./sound/se02.wav');
            res.writeHead(200, {'Content-Type':'audio/wav' });
            res.end(seWav5, 'binary');
            break;
        case '/sound/se06.wav':
            var seWav6 = fs.readFileSync('./sound/se03.wav');
            res.writeHead(200, {'Content-Type':'audio/wav' });
            res.end(seWav6, 'binary');
            break;
    }

}

io.sockets.on('connection', function (socket) {
    socket.emit('resDisply', { disply:'start'});
//	socket.broadcast.emit('resDisply', { disply:'start'});

    socket.on('soundEffect', function (data) {
        socket.emit('resSoundEffect', data);
        socket.broadcast.emit('resSoundEffect', data);
//        console.log(data);
    });

    socket.on('disconnect', function () {
        logging(socket.id);
    });

    socket.on('keydown', function (code) {
        console.log(code);
        switch (code){
            case 37 :
                socket.emit('resSoundEffect',  { effect:'se01' });
                socket.broadcast.emit('resSoundEffect',  { effect:'se01' });
                socket.emit('resSoundEffect',  { effect:'se04' });
                socket.broadcast.emit('resSoundEffect',  { effect:'se04' });
                break;
            case 38 :
                socket.emit('resSoundEffect',  { effect:'se03' });
                socket.broadcast.emit('resSoundEffect',  { effect:'se03' });
                socket.emit('resSoundEffect',  { effect:'se06' });
                socket.broadcast.emit('resSoundEffect',  { effect:'se06' });
                break;
            case 39 :
                socket.emit('resSoundEffect',  { effect:'se02' });
                socket.broadcast.emit('resSoundEffect',  { effect:'se02' });
                socket.emit('resSoundEffect',  { effect:'se05' });
                socket.broadcast.emit('resSoundEffect',  { effect:'se05' });
                break;
            default :
                break;
        }
    });

    logging(socket.id);
});


function logging($socketId) {
    var now = Math.round(new Date().getTime() / 1000);

//    console.log($socketId);
//    console.log(now);
    var http = require('http');
    var logApi = http.get(
        {
            'host':'coronet-internet.com',
            'port':80,
            'path':'/hackathone/' + $socketId + '/' + now + '/log.html'
        },
        function (res) {
            console.log('Got response: ' + res.statusCode);
        }
    );
    logApi.on('error', function (e) {
        console.log(e);
    })
}