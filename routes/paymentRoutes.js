const keys=require('../config/keys');
const stripe=require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
  
    app.post('/api/stripe',requireLogin, async (req, res) => {
      console.log(keys.stripeSecretKey)
      console.log(req.body.id)
    //   const charge = await stripe.charges.create({
    //     amount: 500,
    //     currency: 'usd',
    //     description:'Add credits for creating Surveys',
    //     source: req.body.id
    //   });
  
    //   req.user.credits += 5;
    //   console.log(req.user);
    //   const user = await req.user.save();
  
    //   res.send(user);
    // });

    // stripe.charges.create(
    //   {
    //     amount: 500,
    //     currency: 'usd',
    //     source: req.body.id,
    //     description: 'Add credits for creating Surveys',
    //   },
    //   function(err, charge) {
    //     // asynchronously called
    //     console.log(err)
    //   })
        req.user.credits += 5;
      console.log(req.user);
      const user = await req.user.save();
      res.send(user);
    })};