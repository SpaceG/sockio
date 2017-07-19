# sockio
A RealTime Socket.io Chat 


![Alt text](https://raw.githubusercontent.com/SpaceG/sockio/master/img/ezgif.com-video-to-gif.gif "glas")


# Getting Start with Sockio
First Install all <code>$ npm install</code> packages. Right after that, install Express <code>$ npm install --save express@4.15.2</code> (node modules). then lift the app with <code>$ node index.js</code>


<code>$ npm install</code>

<code>$ npm install --save express@4.15.2</code>

<code>$ node index.js</code>

Open Your Browser <code>http://localhost:3000/</code>

here are some example of the Javascript code in the html file :

<pre>
	  $(function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#sender').val());
      $('#sender').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
  });
	
</pre>

![Alt text](https://raw.githubusercontent.com/SpaceG/sockio/master/img/ezgif.com-video-to-gif_1.gif "glas")
