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
  console.log(req.body);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  const wakeup = req.body.wakeup;
  const childID = req.body.child_id;
  const breakfast = req.body.breakfast;
  const breakfastFood = req.body.breakfast_food;
  const parentComments = req.body.parent_comments;
  const diaperChangeTime = req.body.diaper_change_time;
  const pickupTime = req.body.pickup_time;
  const feedingTime = req.body.feeding_time;
  const feedingFood = req.body.feeding_food;
  const bottleTime = req.body.bottle_time;
  const bottleAmount = req.body.bottle_amount;
  const napStart = req.body.nap_start;
  const napEnd = req.body.nap_end;
  const diaperTime = req.body.diaper_time;
  const diaperKind = req.body.diaper_kind;
  const teacherComments = req.body.teacher_comments;
  const needsDiapers = req.body.needs_diapers;
  const needsWipes = req.body.needs_wipes;
  const needsCream = req.body.needs_cream;
  const needsFormula = req.body.needs_formula;
  const needsFood = req.body.needs_food;
  const needsClothes = req.body.needs_clothes;
  const feelsHappy = req.body.feels_happy;
  const feelsUsual = req.body.feels_usual;
  const feelsSensitive = req.body.feels_sensitive;
  const feelsTired = req.body.feels_tired;
  const feelsActive = req.body.feels_active;

  
  const queryText = `INSERT INTO "daily_forms" (date, wakeup, child_id, breakfast, breakfast_food, parent_comments, 
    diaper_change_time, pickup_time, feeding_food, feeding_time, bottle_time, bottle_amount, nap_start, nap_end, 
    diaper_time, diaper_kind, teacher_comments, needs_diapers, needs_wipes, needs_cream, needs_formula,
    needs_food, needs_clothes, feels_happy, feels_usual, feels_sensitive, feels_tired, feels_active)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, 
    $25, $26, $27, $28) RETURNING id`;
  pool.query(queryText, [today, wakeup, childID, breakfast, breakfastFood, parentComments, diaperChangeTime, pickupTime, 
    feedingFood, feedingTime, bottleTime, bottleAmount, napStart, napEnd, diaperTime, diaperKind, teacherComments, 
    needsDiapers, needsWipes, needsCream, needsFormula, needsFood, needsClothes, feelsHappy, feelsUsual, feelsSensitive, 
    feelsTired, feelsActive])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get form', err);
      res.sendStatus(500)
    })
});

router.put('/update', (req, res) => {
  console.log(req.body);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  const wakeup = req.body.wakeup;
  const childID = req.body.child_id;
  const breakfast = req.body.breakfast;
  const breakfastFood = req.body.breakfast_food;
  const parentComments = req.body.parent_comments;
  const diaperChangeTime = req.body.diaper_change_time;
  const pickupTime = req.body.pickup_time;
  const feedingTime = req.body.feeding_time;
  const feedingFood = req.body.feeding_food;
  const bottleTime = req.body.bottle_time;
  const bottleAmount = req.body.bottle_amount;
  const napStart = req.body.nap_start;
  const napEnd = req.body.nap_end;
  const diaperTime = req.body.diaper_time;
  const diaperKind = req.body.diaper_kind;
  const teacherComments = req.body.teacher_comments;
  const needsDiapers = req.body.needs_diapers;
  const needsWipes = req.body.needs_wipes;
  const needsCream = req.body.needs_cream;
  const needsFormula = req.body.needs_formula;
  const needsFood = req.body.needs_food;
  const needsClothes = req.body.needs_clothes;
  const feelsHappy = req.body.feels_happy;
  const feelsUsual = req.body.feels_usual;
  const feelsSensitive = req.body.feels_sensitive;
  const feelsTired = req.body.feels_tired;
  const feelsActive = req.body.feels_active;
  
  const queryText = `UPDATE "daily_forms" SET date=$1, wakeup=$2, child_id=$3, breakfast=$4, breakfast_food=$5, 
    parent_comments=$6, diaper_change_time=$7, pickup_time=$8, feeding_time=$9, feeding_food=$10, bottle_time=$11, 
    bottle_amount=$12, nap_start=$13, nap_end=$14, diaper_time=$15, diaper_kind=$16, teacher_comments=$17, 
    needs_diapers=$18, needs_wipes=$19, needs_cream=$20, needs_formula=$21, needs_food=$22, needs_clothes=$23, 
    feels_happy=$24, feels_usual=$25, feels_sensitive=$26, feels_tired=$27, feels_active=$28
    WHERE id=${req.body.id}`;
  pool.query(queryText, [today, wakeup, childID, breakfast, breakfastFood, parentComments, diaperChangeTime, pickupTime, 
    feedingTime, feedingFood, bottleTime, bottleAmount, napStart, napEnd, diaperTime, diaperKind, teacherComments, 
    needsDiapers, needsWipes, needsCream, needsFormula, needsFood, needsClothes, feelsHappy, feelsUsual, feelsSensitive,
    feelsTired, feelsActive])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Update form', err);
      res.sendStatus(500)
    })
});

module.exports = router;
