const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      // alert('Please login or signup first.')
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
   