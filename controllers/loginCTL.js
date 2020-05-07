const storage = require("node-persist");

exports.login = async (req, res) => {
  await storage.init(/* options ... */);
  // await storage.setItem("password", "12345");
  let userName = await storage.getItem("userName");
  let password = await storage.getItem("password");
  // console.log("userName: ", userName);
  // console.log("password: ", password);

  //   console.log("userName: ", req.body);
  if (req.body.userName === userName && req.body.password === password) {
    return res.status(200).json({
      message: "Auth sucess",
    });
  } else {
    return res.status(200).json({
      message: "Auth Faild",
    });
  }
};
