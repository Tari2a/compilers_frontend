var express    = require('express');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


app.post('/up', function(req, res){
  var txt_folder_name = req.body.FileName;
  //Do other stuff
})