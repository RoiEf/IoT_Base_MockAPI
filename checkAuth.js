const storage = require("node-persist");

exports.checkAuth = async (req, res, next) => {
  await storage.init(/* options ... */);
  // await storage.setItem("password", "12345");
  let userName = await storage.getItem("userName");
  let password = await storage.getItem("password");
  // console.log("userName: ", userName);
  // console.log("password: ", password);

  //   console.log("userName: ", req.body);
  if (req.fields.userName === userName && req.fields.password === password) {
    next();
  } else {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
