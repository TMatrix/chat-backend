const router = require("express").Router();
const userService = require("../../services/user");

router.get("/", (req, res, next) => {
  userService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get("/:id", (req, res, next) => {
  userService.findOne(Number(req.params.id), (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post("/", (req, res, next) => {
  const item = req.body;
  userService.addNew(item, (err, data) => {
    if(err){
      res.status(400);
      res.end();
    } else{
      res.send(data);
      res.end();
    }
  });
});

router.put("/:id", (req, res, next) => {
  const item = req.body;
  userService.updateOne(Number(req.params.id), item, (err, data) => {
    if(err){
      res.status(400);
      res.end();
    } else{
      res.send(data);
      res.end();
    }
  });
});

router.delete("/:id", (req, res, next) => {
  userService.deleteOne(Number(req.params.id), (err, data) => {
    if (err){
      res.status(400);
      res.end();
    } else{
      res.send(data);
      res.end();
    }
  });
});

module.exports = router;
