var app = require('express')();
var morgan = require('morgan');
app.set('port', (process.env.PORT || 5000));

app.use(morgan('short'));
app.get('/', function(req, res) {
    res.sendFile(__dirname +'/index.html');
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
