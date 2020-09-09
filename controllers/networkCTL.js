const storage = require("node-persist");

exports.network = async (req, res) => {
  await storage.init(/* options ... */);
  // await storage.setItem("ssid", "base_iot");
  // await storage.setItem("wifiPassword", "");
  // await storage.setItem("dhcpMode", "DHCP");

  let ssid;
  let wifiPassword;
  let dhcp;

  if (req.fields.cmd === "update") {
    console.log("wifi updating");
    console.log("req.body: ", req.fields);
    storage.setItem("ssid", req.fields.ssid);
    storage.setItem("wifiPassword", req.fields.wifiPassword);
    dhcp = await storage.getItem("dhcpMode");
    ssid = req.fields.ssid;
    wifiPassword = req.fields.wifiPassword;
  } else if (req.fields.cmd === "updateDHCP") {
    console.log("DHCP updating");
    console.log("req.body: ", req.fields);

    if (req.fields.dhcp) {
      storage.setItem("dhcpMode", "DHCP");
      dhcp = "DHCP";
    } else {
      storage.setItem("dhcpMode", "STATIC");
      dhcp = "STATIC";
    }

    ssid = await storage.getItem("ssid");
    wifiPassword = await storage.getItem("wifiPassword");
  } else {
    ssid = await storage.getItem("ssid");
    wifiPassword = await storage.getItem("wifiPassword");
    dhcp = await storage.getItem("dhcpMode");
  }

  console.log("ssid: ", ssid);
  console.log("wifiPassword: ", wifiPassword);
  console.log("dhcpMode: ", dhcp);
  return res.status(200).json({
    ssid,
    wifiPassword,
    dhcp,
  });
};
