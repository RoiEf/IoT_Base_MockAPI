const storage = require("node-persist");

exports.basic = async (req, res) => {
  await storage.init(/* options ... */);
  // await storage.setItem("device_mode", "AP");
  let device_mode;

  if (req.fields.cmd === "update") {
    if (req.fields.device_mode) {
      storage.setItem("device_mode", "AP");
      device_mode = "AP";
    } else {
      storage.setItem("device_mode", "STA");
      device_mode = "STA";
    }
  } else {
    device_mode = await storage.getItem("device_mode");
  }

  // console.log("device_mode: ", device_mode);
  return res.status(200).json({
    device_mode,
  });
};
