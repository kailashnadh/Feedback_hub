const passport=require('passport');

module.exports=(app)=>{

    app.get('/auth/google/callback',passport.authenticate('google'),
                    (req,res)=>{
                        res.redirect('/surveys')
                    });

    app.get('/auth/google',passport.authenticate('google',{
                                scope:['profile','email']
                }));

    app.get('/api/user',(req,res)=>{
        console.log('user')
        res.send(req.user);
    })

    app.get('/api/logout',(req,res)=>{
        console.log('logout')
        req.logout();
        res.redirect('/');
    })
}

