const storage = require("node-persist");

const generateRandomString = function () {
  let length = Math.floor(Math.random() * 10 + 1);
  if (length < 6) {
    length = 6;
  }
  return Math.random().toString(20).substring(2, length);
};

exports.scan = async (req, res) => {
  let message;
  let networks = [];

  let n = Math.floor(Math.random() * 11);
  if (n > 0) {
    // let obj = {};
    let SSID = "";
    let auth = false;
    let signal = Math.floor(Math.random() * 5 + 1);

    await storage.init();
    for (let i = 0; i <= n; i++) {
      switch (i) {
        case 0:
          SSID = "testnet1";
          auth = true;
          networks.push({ SSID, auth, signal });
          break;
        case 1:
          SSID = "testnet2";
          auth = true;
          signal = Math.floor(Math.random() * 5 + 1);
          networks.push({ SSID, auth, signal });
          break;

        default:
          SSID = generateRandomString();
          let val = Math.floor(Math.random() * 9);
          if (val > 0) {
            auth = true;
          } else {
            auth = false;
          }
          signal = Math.floor(Math.random() * 5 + 1);
          // obj = { SSID, auth, signal };
          networks.push({ SSID, auth, signal });
          break;
      }
    }
    message = `${n} Networks found`;
  } else {
    message = "No Networks found";
  }

  return res.status(200).json({
    message,
    networks,
  });
};

exports.network = async (req, res) => {
  await storage.init(/* options ... */);
  // START await storage.setItem(); INIT ITEMS RUN ONLY ONCE
  {
    // await storage.setItem("device_mode", "AP");
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

  let device_mode;
  let ssid;
  let wifiPassword;
  let dhcp;
  let ip1, ip2, ip3, ip4, sm1, sm2, sm3, sm4, dg1, dg2, dg3, dg4;
  let message;

  if (req.fields.cmd === "update") {
    console.log("wifi updating");
    console.log("req.body: ", req.fields);
    storage.setItem("ssid", req.fields.ssid);
    storage.setItem("wifiPassword", req.fields.wifiPassword);

    ssid = req.fields.ssid;
    wifiPassword = req.fields.wifiPassword;
    device_mode = await storage.getItem("device_mode");
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

    device_mode = await storage.getItem("device_mode");
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

    device_mode = await storage.getItem("device_mode");
    ssid = await storage.getItem("ssid");
    wifiPassword = await storage.getItem("wifiPassword");
    dhcp = await storage.getItem("dhcpMode");
  } else if (req.fields.cmd === "updateDeviceMode") {
    if (req.fields.wifiAP) {
      storage.setItem("device_mode", "AP");
      device_mode = "AP";
    } else {
      storage.setItem("device_mode", "STA");
      device_mode = "STA";
    }

    message = "Device Mode Update sucess";
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
  } else {
    device_mode = await storage.getItem("device_mode");
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

  console.log("device_mode: ", device_mode);
  console.log("ssid: ", ssid);
  console.log("wifiPassword: ", wifiPassword);
  console.log("dhcpMode: ", dhcp);
  console.log("ip1: ", ip1);
  console.log("sm1: ", sm1);
  console.log("dg1: ", dg1);
  return res.status(200).json({
    message,
    device_mode,
    ssid,
    wifiPassword,
    dhcp,
    ip1,
    ip2,
    ip3,
    ip4,
    sm1,
    sm2,
    sm3,
    sm4,
    dg1,
    dg2,
    dg3,
    dg4,
  });
};
