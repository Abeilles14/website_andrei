// middleware
// start and run server
const express = require('express');
const app = express();

const photosRoutes = require('./routes/photos-routes');

const allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:3000',
  'http://localhost:5000',
  'https://iandre.ca',
  'https://iandre-website.web.app',
  'https://iandre-website.herokuapp.com'
]

const PORT = process.env.PORT || 3000;

// Cross-Origin Middleware
app.use((req, res, next) => {
    const origin = `${req.protocol}://${req.headers.host}`;
    
    if (allowedOrigins.includes(origin)) {
        console.log('backend:: request from origin', origin);
        // res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Origin', '*');  // allow all
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    } else {
        console.log('Error accessing API at origin: ', origin);

        return res.status(403).json({
            status: 403,
            message: 'Access Denied: API access for personal website use only at https://iandre.ca',
        })
      }
});  

//Middleware function:
const logger = (req, res, next) => {
  console.log('full request link: ')
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}

// Middlewere execute:
app.use(logger);
// Body Parser Middlware:
app.use(express.json());
// parse requrests of content-type: 
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('photo-grid backend :)');
});

// routes
app.use("/gallery", photosRoutes);

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

