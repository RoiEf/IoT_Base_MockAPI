const storage = require("node-persist");

exports.network = async (req, res) => {
  await storage.init(/* options ... */);
  // await storage.setItem("ssid", "base_iot");
  // await storage.setItem("wifiPassword", "");
  let ssid;
  let password;

  ssid = await storage.getItem("ssid");
  password = await storage.getItem("wifiPassword");

  // console.log("device_mode: ", device_mode);
  return res.status(200).json({
    ssid,
    password,
  });
};
