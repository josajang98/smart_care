import io from 'socket.io-client';
const socket = io.connect('https://smartcare.loca.lt')
socket.emit("roomjoin", 'sensor');
socket.emit("data", 'sensor')