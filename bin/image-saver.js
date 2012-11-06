var saver = require("../node-images-saver"),
  path = "images",
  port = 8888;

saver.createServer(path, port);