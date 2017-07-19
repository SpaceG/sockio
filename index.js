/*var app = require('express')();
var http = require('http').Server(app);*/

/*app.get('/', function(req, res){
  res.send('<h1>Hello world, this will be the gethype.io webspace</h1>');
});*/

/*app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});*/
 var express = require('express');
 var path = require('path');
 var app = express();
 var http = require('http').Server(app);
 var io = require('socket.io')(http);
  // GET index.html .
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
  // GET /static/style.css etc.
  app.use('/static', express.static('static'));
// make connections for the user and disconnected it
// when he close a window or open a new one!
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
// connections send messages in terminal and window 
// to the user in that new window
    io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
// make evend for everybody  
    io.emit('some event', { for: 'everyone' });

// connections broadcast it
    io.on('connection', function(socket){
  socket.broadcast.emit('hi');
});
//connectons send message to the user
    io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
// server listen on port :3000 change the the port on localhost
http.listen(3000, function(){
  console.log('listening on *:3000');
});
