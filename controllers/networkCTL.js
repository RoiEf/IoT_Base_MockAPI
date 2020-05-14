const storage = require("node-persist");

exports.network = async (req, res) => {
  await storage.init(/* options ... */);
  // await storage.setItem("ssid", "base_iot");
  // await storage.setItem("wifiPassword", "");
  let ssid;
  let wifiPassword;

  if (req.body.cmd === "update") {
    storage.setItem("ssid", req.body.ssid);
    storage.setItem("wifiPassword", req.body.wifiPassword);
    ssid = req.body.ssid;
    wifiPassword = req.body.wifiPassword;
  } else {
    ssid = await storage.getItem("ssid");
    wifiPassword = await storage.getItem("wifiPassword");
  }

  // console.log("device_mode: ", device_mode);
  return res.status(200).json({
    ssid,
    wifiPassword,
  });
};
