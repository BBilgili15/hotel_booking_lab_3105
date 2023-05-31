const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post('/', (req, res) => {
    const newBookingData = req.body
    collection
    .insertOne(newBookingData)
    .then((result) => {
      const myObjectId = result.insertedId
      collection
        .findOne({ _id: myObjectId })
        .then((doc) => res.json(doc))
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(ObjectID)
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(result => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    collection.updateOne(
      {_id: ObjectID(id)},
      {$set: updatedData}
    ).then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })




  return router;
};

module.exports = createRouter;