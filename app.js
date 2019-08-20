#!/usr/bin/env node

var express 	= require('express');
var app 	= express();
var romanize    = require('romanize-names');

root_page = 
`
<!DOCTYPE html>
<html><head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
<body>
<h2>Easyname api let you pronounce Chinese name easily</h2>
<p>Usage: to greet 郑晓舟. 
<p>Chinese name: <input type="text" id="fname" oninput="update_encode()" value="郑晓舟">
<p>Romanized name: <input type=text id="romanized_text"></input>
<p>Encoded name: <input type="text" id ="encodedname" size=20>
<script>
base_url="https://easyname.hulaorui.com/name/"
update_encode();
function update_encode() {
  var x = document.getElementById("fname");
  var y = document.getElementById("encodedname");
  y.value = encodeURI(x.value);
  var romanized=document.getElementById("romanized_text");
  const http = new XMLHttpRequest();
  http.open("GET", base_url+y.value);
  http.send();
  http.onreadystatechange=(e)=>{
    romanized.value=http.responseText;
  }
}
</script>
<p>
<p>Try: curl -G https://easyname.hulaorui.com/name/%E9%83%91%E6%99%93%E8%88%9F
<p>Incoming string shall be encoded for url
<p>Javascript Sample: var chinese = encodeURI('郑晓舟')

</body>
</html>
`

app.get('/', function(req,res){
    res.status(200).send(root_page);
});

app.get('/about', function(req, res) {
    res.status(200).send(`easyname api let you speak Chinese instantly
			<p>Usage: to find romanized pronouciation of 郑晓舟
			<p>curl -G http://easyname.hulaorui.com/name/%E9%83%91%E6%99%93%E8%88%9F 
			<p>
			<p>Incoming parameters shall be encoded to pass as url
			<p>Javascript Sample: var chinese = encodeURI('郑晓舟') `);
});

app.get('/name/:name', function(req, res){
    chinese_name = decodeURI(req.params.name);
    roman_name = romanize(chinese_name);
    res.status(200).send(roman_name);
});

var server 	= app.listen(3000, function () {
    console.log('Romanize Name API is running on port.', server.address().port);
});
