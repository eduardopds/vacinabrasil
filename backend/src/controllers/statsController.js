'use strict';

const repository = require('../repositories/statsRepository');

exports.get = async (req, res, next) => {
  repository
    .get()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
};
