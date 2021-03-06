const passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({ hey: 'girl' });
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
            res.redirect('/deadlines/');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        req.session = null;
        res.redirect('/logged-out');
        res.send();
    });

    app.get('/api/current_user', (req, res) => {
        const data = req.user ? req.user : { _id: null };
        res.send(data);
    });
};
