const router = require("express").Router();
const messageService = require("../../services/message");

router.get("/:id", (req, res, next) => {
  messageService.showUserMessages(Number(req.params.id), (err, data) => {
    if (!err) {
      res.send(data);
      res.end();
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;