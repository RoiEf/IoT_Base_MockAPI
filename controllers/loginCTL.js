exports.login = (req, res) => {
  //   console.log("userName: ", req.body);
  if (req.body.userName === "admin" && req.body.password === "12345") {
    return res.status(200).json({
      message: "Auth sucess",
    });
  } else {
    return res.status(401).json({
      message: "Auth Faild",
    });
  }
};
