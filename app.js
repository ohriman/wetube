/*
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
const port = 3000

/* express 메인홈페이지 코드
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/

/*

const handleListening = () => {
  console.log(`Listening on http://localhost:${port}`);
}

const handleHome = (req, res) => {
  res.send("Hello from my ass");
}

const handleProfile = (req, res) => {
  res.send("You are on my profile");
}

//middleware zone start
/*
const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
}
*/
//middleware zone end

/*

//app.use(betweenHome);

// new middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(port, handleListening);
*/

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middleware";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
