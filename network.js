const { exec } = require("child_process");
const network = require("network");
const fs = require("fs");
const express = require("express");

const MQTT_SERVER = "192.168.1.177";
const MQTT_PORT = "1883";
const MQTT_USER = "servesook";
const MQTT_PASSWORD = "servesook";

var mqtt = require("mqtt");

var client = mqtt.connect({
  host: MQTT_SERVER,
  port: MQTT_PORT,
  username: MQTT_USER,
  password: MQTT_PASSWORD
});

var dhcpcd_copy;
var mqttData;
var dgw_number;
var routers_ip;

fs.readFile("dhcpcd_copy.conf", function(err, data) {
  if (err) {
    console.log(`error: ${err}`);
  } else {
    dhcpcd_copy = String(data);
  }
});

client.on("connect", function() {
  console.log("MQTT Connect");
  client.subscribe("node/envi", function(err) {
    if (err) {
      console.log(err);
    }
  });
});

// Receive Message and print on terminal
client.on("message", function(topic, message) {
  // message is Buffer
  console.log(message.toString());
  mqttData = message.toString();
});

const app = express();

app.use(express.json());

app.get("/getFarmData", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.send(mqttData);
  res.send("ENVI,IN,31.32,76.65");
});

app.get("/getIP", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  network.get_gateway_ip(function(err, ip) {
    console.log(err || ip);
    // res.send(ip);
    let ip_arr = ip.split(".");
    dgw = ip_arr[2];
    res.send(`192.168.${dgw}.177`);
  });
});

app.get("/configDhcpcd", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let default_number;
  let default_gateway;
  let conf_str;
  let wifi_gateway;
  let static_ip;
  network.get_gateway_ip(async function(err, ip) {
    console.log(err || ip);
    default_gateway = String(ip);
    ip_arr = await ip.split(".");
    default_number = ip_arr[2];
    wifi_gateway = `192.168.${parseInt(default_number) + 3}.1`;
    static_ip = `192.168.${default_number}.177`;
    conf_str = `interface eth0\nstatic ip_address=192.168.${default_number}.177/24\nstatic routers=${default_gateway}\nstatic domain_name_servers=${default_gateway}\n\ninterface wlan0\nstatic ip_address=192.168.${parseInt(
      default_number
    ) + 3}.1/24\nnohook wpa_supplicant\n`;

    fs.readFile("dhcpcd_copy.conf", function(err, data) {
      if (err) {
        console.log(`error: ${err}`);
      } else {
        dhcpcd_copy = data;
      }
    });

    fs.writeFile("/etc/dhcpcd.conf", dhcpcd_copy + conf_str, function(err) {
      if (err) {
        res.send(err);
        return console.log(err);
      }
      console.log("SAVED");
      res.send(static_ip);
    });
  });
});

app.get("/reboot", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  exec("sudo reboot", (error, stdout, stderr) => {
    if (error) {
      console.log(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`STD Error: ${stderr}`);
      return;
    }
    res.send("reboot");
  });
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port${port}...`));
