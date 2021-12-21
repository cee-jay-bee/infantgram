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
  console.log("post req.body", req.body)
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);

  const wakeup = req.body.dailyForm.wakeup;
  const childID = req.body.dailyForm.childID;
  const breakfast = req.body.dailyForm.breakfastTime;
  const breakfastFood = req.body.dailyForm.breakfastFood;
  const parentComments = req.body.dailyForm.parentComments;
  const diaperChangeTime = req.body.dailyForm.diaperChange;
  const pickupTime = req.body.dailyForm.pickupTime;
  const feedingInfo = req.body.dailyForm.feedingInfo;
  const bottles = req.body.dailyForm.bottles;
  const naps = req.body.dailyForm.naps;
  const diapers = req.body.dailyForm.diapers;
  const needs = req.body.babyNeeds;
  const feelings = req.body.babyFeels;
  const teacherComments = req.body.dailyForm.teacherComments;
  
  const queryText = `INSERT INTO "daily_forms" (date, wakeup, child_id, breakfast, breakfast_food, parent_comments, 
    diaper_change_time, pickup_time, feeding_information, bottles, naps, diapers, needs, feelings, teacher_comments)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING id`;
  pool.query(queryText, [today, wakeup, childID, breakfast, breakfastFood, parentComments, diaperChangeTime, pickupTime, feedingInfo,
  bottles, naps, diapers, needs, feelings, teacherComments])
    .then( result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get class children', err);
      res.sendStatus(500)
    })
});

module.exports = router;
