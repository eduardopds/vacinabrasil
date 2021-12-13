const User = require("../models/User");

exports.get = async () => {
  return await User.findAll();
};

exports.getById = async (id) => {
  return await User.findByPk(id);
};

exports.delete = async (user) => {
  await user.destroy();
};

exports.post = async (user) => {
  return User.create(user);
};
