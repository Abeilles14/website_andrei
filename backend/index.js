// middleware
// start and run server
const express = require('express');
const app = express();

const photosRoutes = require('./routes/photos-routes');

const allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:3000',
  'https://iandre.ca',
  'https://iandre-website.web.app',
  'localhost:4200',
  'localhost:3000',
  'iandre.ca',
  'iandre-website'
]

const PORT = process.env.PORT || 3000;

// Body Parser Middlware:
app.use(express.json());
// parse requrests of content-type: 
app.use(express.urlencoded({ extended: false }));

// Cross-Origin Middleware
app.use(function(req, res, next) {
    const origin = req.headers.origin;//host;
    
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin)
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        next()
    } else {
        console.log('Error accessing API at origin: ', origin);

        return res.status(403).json({
            status: 403,
            message: 'Access Denied: API access for personal website use only at https://iandre.ca',
        })
      }
});  

app.get('/', (req, res) =>
  res.send('photo-grid backend :)')
);

// routes
app.use("/gallery", photosRoutes);

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

