const express = require('express');
const axios = require('axios');

const support = require('../middlewares');

const router = express.Router();


/* GET insert city form page. */

router.get('/', (req, res, next) => {
  res.render('city/index');
});


/* GET City page. */

// Como hacerlo desde url

router.get('/:city', (req, res, next) => {
  const { city } = req.params;
  axios.get(support.generateUrl(city))
    .then(({ data }) => {
      res.render('city/show', { data });
    })
    .catch((error) => {
      next(error);
    });
});


module.exports = router;
