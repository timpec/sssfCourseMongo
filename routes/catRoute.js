'use strict';

const router = require('express').Router();
const cat = require('../model/catModel');

router.route('/')
  .post(async (req, res) => {
    console.log(req.body)
    const myCat = await cat.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      color: req.body.color,
      weight: req.body.weight,
      //owner: "5e7cc54eb65a4941a98f4a81"
    });
    res.send(`Added cat: ${myCat.name}`);
  })
  .get(async (req, res) => {
    console.log("All the cats..")
    res.send(await cat.find());
  })
  .patch(async (req, res) => {
    const mod = await cat.updateOne({ _id: req.body.id });
    res.status(200).send(`updated sucessfully ${mod.name} cats stats`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.body.id });
    res.send(`deleted cat ${del.name}`);
  });


/*
router.route('/:id')
  .get(async (req, res) => {
    res.send(await cat.findById(req.params.id));
  })
  .patch(async (req, res) => {
    const mod = await cat.updateOne({ _id: req.params.id }, { title: req.body.title });
    res.status(200).send(`updated sucessfully ${mod.nModified} cat post`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.params.id });
    res.send(`deleted ${del.deletedCount} cat post`);
  });
*/
  
module.exports = router;