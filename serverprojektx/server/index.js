
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express()

app.use(bodyParser.json())
app.disable('x-powered-by')
app.use(cors());
app.use('/', [
  require('./routes/auth_routes'),
  require('./routes/user_routes'),
  require('./routes/project_routes'),
  require('./routes/data_routes')
])
app.get('/downloadpath', function(req, res){
 
 const filepath=JSON.stringify(req.query);
 const words = filepath.split('"');
  res.download(`./filexml/${words[1]}`);
 
});

app.use(require('./middleware/error_middleware').all)

module.exports = app