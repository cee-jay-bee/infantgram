const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);

  const query = `SELECT * FROM daily_forms
  WHERE child_id = ${req.params.id}
  AND date = '${today}'`;
  pool.query(query)
    .then( result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get class children', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
