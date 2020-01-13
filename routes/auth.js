const express = require('express');
const router = express.Router();


/**
 * @route GET api/auth
 * @desc Get logged in user
 * @access Private
 */
router.get('/', (req, res)=>{
    return  res.send('Get logged i user');
});


/**
 * @route POST api/auth
 * @desc Auth user & get token
 * @access Public
 */
router.post('/', (req, res)=>{
    return  res.send('Log in user');
});

module.exports = router;