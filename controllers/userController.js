import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", {pageTitle: 'Join'});
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if(password !== password2){
    res.status(400);
    res.render("join", {pageTitle: 'Join'});
  } else {
    // To do: Register User (할일: 사용자 등록)
    // To do: Log user in (할일: 사용자 로그인)
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => 
  res.render("login", {pageTitle: 'Log In'});
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To do: Process Log Out(할일: 로그아웃 처리)
  res.redirect(routes.home);
}


export const userDetail = (req, res) => 
  res.render("userDetail", {pageTitle: 'User Detail'});

export const editProfile = (req, res) => 
  res.render("editProfile", {pageTitle: 'Edit Profile'});

export const changePassword = (req, res) => 
  res.render("changePassword", {pageTitle: 'Change Password'});