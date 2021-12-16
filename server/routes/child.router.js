const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  
});

router.get('/:id', (req, res) => {
  // GET route code here
  console.log('req.params', req.params);
  
  const query = `SELECT * FROM "child" WHERE parent_id = ${req.params.id}`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get one child', err);
      res.sendStatus(500)
    })
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/', rejectUnauthenticated, (req, res, next) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const dateOfBirth = req.body.dateOfBirth;
  const allergies = req.body.allergies;
  const parentID = req.body.parentID;

  const queryText = `INSERT INTO "child" (first_name, last_name, parent_id, birth_date, allergies)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool
    .query(queryText, [firstName, lastName, parentID, dateOfBirth, allergies])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});



module.exports = router;
