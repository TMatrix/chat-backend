const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  addNew: (doc, callback) => {
    UserRepository.addNew(doc, (err, data) => {
      callback(err, data);
    });
  },

  updateOne: (id, item, callback) => {
    UserRepository.updateOne(id, item, (err, data) => {
      callback(err, data);
    })
  },

  deleteOne: (id, callback) => {
    UserRepository.deleteOne(id, (err, data) => {
      callback(err, data);
    })
  }
};
