const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const restricted = require("../auth/auth-middleware");

const authRouter = require("../auth/auth-router");
const userRouter = require("../user/user-router");
const userInfoRouter = require("../userInfo/userInfo-router");
require('dotenv').config()

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/user", restricted, userRouter);
server.use("/api/userInfo", restricted, userInfoRouter);
server.use("/api/auth", authRouter);

module.exports = server;