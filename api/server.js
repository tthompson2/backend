const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require("cookie-parser")
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

const restricted = require("../auth/auth-middleware");

const authRouter = require("../auth/auth-router");
const userRouter = require("../user/user-router");
const userInfoRouter = require("../userInfo/userInfo-router");
const {secret} = require("../config/secret")

const server = express();

const sessionConfig = {
    name: 'chocolate-chip',
    secret: secret,
    cookie: {
      maxAge: 3600 * 1000,
      secure: false, // should be true in production
      httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
  
    store: new knexSessionStore(
      {
        knex: require("../database/dbConfig.js"),
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 3600 * 1000
      }
    )
  }

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());
server.use(session(sessionConfig));

server.use("/api/user", restricted, userRouter);
server.use("/api/userInfo", restricted, userInfoRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });

module.exports = server;