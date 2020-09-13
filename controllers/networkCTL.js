const storage = require("node-persist");

exports.network = async (req, res) => {
  await storage.init(/* options ... */);
  // START await storage.setItem(); INIT ITEMS RUN ONLY ONCE
  {
    // await storage.setItem("ssid", "base_iot");
    // await storage.setItem("wifiPassword", "");
    // await storage.setItem("dhcpMode", "DHCP");
    // await storage.setItem("ip1", 0);
    // await storage.setItem("ip2", 0);
    // await storage.setItem("ip3", 0);
    // await storage.setItem("ip4", 0);
    // await storage.setItem("sm1", 0);
    // await storage.setItem("sm2", 0);
    // await storage.setItem("sm3", 0);
    // await storage.setItem("sm4", 0);
    // await storage.setItem("dg1", 0);
    // await storage.setItem("dg2", 0);
    // await storage.setItem("dg3", 0);
    // await storage.setItem("dg4", 0);
  }
  // END await storage.setItem(); INIT ITEMS RUN ONLY ONCE

  let ssid;
  let wifiPassword;
  let dhcp;
  let ip1, ip2, ip3, ip4, sm1, sm2, sm3, sm4, dg1, dg2, dg3, dg4;


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
  } else if (req.fields.cmd === "updateStaticIP") {
    console.log("Static IP updating");
    console.log("req.body: ", req.fields);

    ip1 = req.fields.ip1;
    ip2 = req.fields.ip2;
    ip3 = req.fields.ip3;
    ip4 = req.fields.ip4;
    sm1 = req.fields.sm1;
    sm2 = req.fields.sm2;
    sm3 = req.fields.sm3;
    sm4 = req.fields.sm4;
    dg1 = req.fields.dg1;
    dg2 = req.fields.dg2;
    dg3 = req.fields.dg3;
    dg4 = req.fields.dg4;
    storage.setItem("ip1", ip1);
    storage.setItem("ip2", ip2);
    storage.setItem("ip3", ip3);
    storage.setItem("ip4", ip4);
    storage.setItem("sm1", sm1);
    storage.setItem("sm2", sm2);
    storage.setItem("sm3", sm3);
    storage.setItem("sm4", sm4);
    storage.setItem("dg1", dg1);
    storage.setItem("dg2", dg2);
    storage.setItem("dg3", dg3);
    storage.setItem("dg4", dg4);

    ssid = await storage.getItem("ssid");
    wifiPassword = await storage.getItem("wifiPassword");
    dhcp = await storage.getItem("dhcpMode");
  } else {
    ssid = await storage.getItem("ssid");
    wifiPassword = await storage.getItem("wifiPassword");
    dhcp = await storage.getItem("dhcpMode");
    ip1 = await storage.getItem("ip1");
    ip2 = await storage.getItem("ip2");
    ip3 = await storage.getItem("ip3");
    ip4 = await storage.getItem("ip4");
    sm1 = await storage.getItem("sm1");
    sm2 = await storage.getItem("sm2");
    sm3 = await storage.getItem("sm3");
    sm4 = await storage.getItem("sm4");
    dg1 = await storage.getItem("dg1");
    dg2 = await storage.getItem("dg2");
    dg3 = await storage.getItem("dg3");
    dg4 = await storage.getItem("dg4");
  }

  console.log("ssid: ", ssid);
  console.log("wifiPassword: ", wifiPassword);
  console.log("dhcpMode: ", dhcp);
  console.log("ip1: ", ip1);
  console.log("sm1: ", sm1);
  console.log("dg1: ", dg1);
  return res.status(200).json({
    ssid,
    wifiPassword,
    dhcp,
    ip1, ip2, ip3, ip4,
    sm1, sm2, sm3, sm4,
    dg1, dg2, dg3, dg4,
  });
};
