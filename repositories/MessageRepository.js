const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");
const User = require("../models/user");

function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Message;
}

MessageRepository.prototype = new Repository();
MessageRepository.prototype.showUserMessages = showUserMessages;

function showUserMessages(id, callback) {
  var model = this.model;
  var query = model
  .aggregate()
  .match({$or:[{senderId: id},{receiverId: id}]})
  .group(
    { _id: null, uniqueSender: { $addToSet: '$senderId' }, uniqueReceiver:{ $addToSet: '$receiverId'}}
  )
  .then( (res) => {
    User.find({$and:[{$or:[{"id":{$in:res[0].uniqueSender}},{"id":{$in:res[0].uniqueReceiver}}]}, {id:{$ne:id}}]}, {_id:0}).exec(callback);
  })
  .catch(callback);
}

module.exports = new MessageRepository();
