var http = require('http')

var url = require('url')

http.createServer(function(req, res)
{

  var route = req.url

  if(route==='/')
  {
    res.end('This is information from backend to home')
  }
  if(route==='/getusernames')
  {
    var usernames = ['Ronaldo', 'Messi', 'Neymar']
    res.end(JSON.stringify(usernames))
  }
  {
    res.end('This is information from backend to home')
  }
  console.log('My Node Js Server Started Successfully')
}).listen(5000)