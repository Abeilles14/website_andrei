// start and run server
const PORT = process.env.PORT || 3000;
const http = require('http');
const app = express();
var indexRoute = require('../api/index');

//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // TODO: is this necessary?

// Cross-Origin Middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});  

app.use('/', indexRoute);

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

