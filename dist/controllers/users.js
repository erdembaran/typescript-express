"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.getUsers = void 0;
function getUsers(req, res) {
  res.send([]);
}
exports.getUsers = getUsers;
function getUser(req, res) {
  res.send({});
}
exports.getUser = getUser;
function createUser(req, res) {
  return res.status(201).send({
    id: 1,
    username: "baran",
    email: "baran@info.com",
  });
}
exports.createUser = createUser;
