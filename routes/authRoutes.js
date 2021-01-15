const passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        // res.send({ hello: 'world!' });
    });

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/deadlines');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        const data = req.user ? req.user : { _id: null };
        res.send(data);
    });
};
