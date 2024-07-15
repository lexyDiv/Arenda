/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // res.clearCookie('user'); // delete cookie with name "user"
    const users = await User.findAll({ raw: true });
    //const hashPassword = await bcrypt.hash('123', 10);
   // const isSame = await bcrypt.compare('123', '123');
   //  req.session.userId = users[0].id;
   // req.session.destroy('');


  //  if(req.session && req.session.userId && req.session.userId === 1)
  //  {
  //   req.session.destroy();
  //   res.clearCookie('user_sid');
  //  }
  //  else{
  //   console.log("No session");
  //  }  // All right!!!


    res.json(users);
  } catch (error) {
    res.json({ error: 'err' });
  }
});

module.exports = router;
