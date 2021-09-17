exports.requireLogin = (req,res,next) => {
    if(req.session && req.session.user){
        return res.next();
    }
    else{
        return res.redirect('/login');
    }
}