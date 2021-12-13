"use strict";

const repository = require("../repositories/userRepository");

exports.post = async (req, res, next) => {
  repository
    .post(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((e) => {
      res.status(500).json({ erro: e });
    });
};

exports.get = async (req, res, next) => {
  repository
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
};

exports.getById = (req, res, next) => {
  repository
    .getById(req.params.id)
    .then((user) => {
      if (user == null) {
        res.status(404).json({ error: "Usuário não existe" });
      } else {
        res.status(200).json(user);
      }
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};
