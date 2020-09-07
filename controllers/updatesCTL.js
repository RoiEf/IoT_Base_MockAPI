const storage = require("node-persist");

exports.firmware = async (req, res) => {
  console.log("user name", req.fields.userName);
  console.log("password", req.fields.password);
  return res.status(200).json({
    message: "firmware sucess",
  });
};
exports.spa = (req, res) => {
  return res.status(200).json({
    message: "spa sucess",
  });
};
exports.password = async (req, res) => {
  await storage.init(/* options ... */);
  let userName = await storage.getItem("userName");
  let password = await storage.getItem("password");
  console.log("userName: ", userName);
  console.log("password: ", password);
  console.log("req.fields.userName: ", req.fields.userName);
  console.log("req.fields.password: ", req.fields.password);
  console.log("req.fields.password1: ", req.fields.password1);
  console.log("req.fields.password2: ", req.fields.password2);

  if (req.fields.userName === userName && req.fields.password === password) {
    if (req.fields.password1 === req.fields.password2 && req.fields.password1.length > 4) {
      console.log("password1: ", req.fields.password1);
      storage.setItem("password", req.fields.password1);
      return res.status(200).json({
        message: "Password Update sucess",
      });
    } else {
      return res.status(200).json({
        message: "Password Update Faild",
      });
    }
  } else {
    return res.status(200).json({
      message: "Auth Faild",
    });
  }
};
