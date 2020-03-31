var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var uuid = require('uuid')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

let freeUser = {}

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('msg', function (msg) {
    console.log('/////message: ');
    console.log('%O', msg);
    io.emit('msg', { msg: msg, id: socket.id });
  });

  socket.on('join', function (msg) {
    console.log('/////join: ');
    console.log('%O', msg);

    if (Object.keys(freeUser).length > 0 && !freeUser[socket.id]) {

      //создаем room
      const room = uuid.v4();
      socket.join(room);

      const respondentId=Object.keys(freeUser)[0]

      delete freeUser[respondentId]

      const socket2 = io.sockets.connected[respondentId];
      socket2.join(room);

      io.sockets.to(room).emit('connectRoom', { room: room, });
    } else {
      freeUser[socket.id]={}

      socket.emit("addToQuare", "test")
    }
  });

  socket.on('msg2room', function (msg) {
    console.log('/////msg2room: ');
    console.log('%O', msg);
    io.sockets.to(msg.room).emit('msg2room', { msg: msg.msg, });
  });

  socket.on('leaveRoom', function (msg) {
    console.log('/////leaveRoom: ');
    console.log('%O', msg);

    const roster = io.sockets.clients(msg.room);
    roster.forEach(function (client) {
      client.leave(msg.room)
      client.emit('leavRoom', { msg: msg.msg, });
    });
  });

  socket.on('disconnect', (reason) => {
    if (reason === 'io server disconnect') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    }
    console.log('/////disconnect: ');
    delete freeUser[socket.id]
    // else the socket will automatically try to reconnect
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});