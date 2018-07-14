const user = require("./user");
const message = require("./message");
const messages = require("./messages");

module.exports = function(app) {
  app.use("/api/user", user);
  app.use("/api/message", message);
  app.use("/api/messages", messages);
};
