// Response for Uptime Robot
const http = require('http');
http.createServer(function(request, response)
{
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Discord bot is active now \n');
}).listen(3000);
// Discord bot implements

const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message =>
{
console.log('bot is ready!');
