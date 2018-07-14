function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.addNew = addNew;
Repository.prototype.updateOne = updateOne;
Repository.prototype.deleteOne = deleteOne;

function getAll(callback) {
  var model = this.model;
  var query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
  var model = this.model;
  var query = model.findOne({
    id: id
  });
  query.exec(callback);
}

function addNew(doc, callback) {
  var model = this.model;
  var query = model.findOneAndUpdate({id:doc.id}, doc, {upsert:true});
  query.exec(callback);
}

function updateOne(id, item, callback) {
  var model = this.model;
  var query = model.updateOne({id:id}, item);
  query.exec(callback);
}

function deleteOne(id, callback) {
  var model = this.model;
  var query = model.findOneAndDelete({id:id}, {projection: {_id:0, id:1}});
  query.exec(callback);
}

module.exports = Repository;
