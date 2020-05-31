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
exports.password = (req, res) => {
  return res.status(200).json({
    message: "password sucess",
  });
};
