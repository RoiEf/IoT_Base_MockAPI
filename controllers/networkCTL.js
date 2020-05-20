const storage = require("node-persist");

exports.network = async (req, res) => {
  await storage.init(/* options ... */);
  // await storage.setItem("ssid", "base_iot");
  // await storage.setItem("wifiPassword", "");
  let ssid;
  let wifiPassword;

  if (req.body.cmd === "update") {
    console.log("wifi updating");
    console.log("req.body: ", req.body);
    storage.setItem("ssid", req.body.ssid);
    storage.setItem("wifiPassword", req.body.wifiPassword);
    ssid = req.body.ssid;
    wifiPassword = req.body.wifiPassword;
  } else {
    ssid = await storage.getItem("ssid");
    wifiPassword = await storage.getItem("wifiPassword");
  }

  console.log("ssid: ", ssid);
  console.log("wifiPassword: ", wifiPassword);
  return res.status(200).json({
    ssid,
    wifiPassword,
  });
};
