const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  findAll: callback => {
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    MessageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },
  addNew: (doc, callback) => {
    MessageRepository.addNew(doc, (err, data) => {
      callback(err, data);
    });
  },

  updateOne: (id, item, callback) => {
    MessageRepository.updateOne(id, item, (err, data) => {
      callback(err, data);
    })
  },

  deleteOne: (id, callback) => {
    MessageRepository.deleteOne(id, (err, data) => {
      callback(err, data);
    })
  },

  showUserMessages: (id, callback) => {
    MessageRepository.showUserMessages(id, (err, data) => {
      callback(err, data);
    })
  }
};