import express from "express";
import routes from "../routes";
import { search, home } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogin,
  getMe,
  facebookLogin,
  postFacebookLogin,
} from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middleware";
import passport from "passport";

const globalRouter = express.Router();

// 회원가입
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// 로그인
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

// 메인홈페이지
globalRouter.get(routes.home, home);

// 검색
globalRouter.get(routes.search, search);

// 로그아웃
globalRouter.get(routes.logout, onlyPrivate, logout);

// Github 로그인 관련
globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

// 개인설정
globalRouter.get(routes.me, getMe);

// Facebook  로그인 관련
globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

export default globalRouter;
