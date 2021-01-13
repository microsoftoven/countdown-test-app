// Common JS modules (on front end we'd use ES2015 imports)
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./models/deadline');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); // used to setup configuration to listen to incoming requests

// middleware
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/deadlineRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets, like main.js or main.css
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname__, 'client', 'build', 'index.html')
        );
    });
}

const PORT = process.env.PORT || 5000; // dynamic port binding
app.listen(PORT);
