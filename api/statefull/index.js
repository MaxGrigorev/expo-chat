var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('msg', function(msg){
    console.log('message: ' + msg);
    // console.log('%O',socket);
    io.emit('msg', {msg:msg,id:socket.id});
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});