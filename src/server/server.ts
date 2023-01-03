import express from "express";
import { spawn } from "child_process";
import path from "path";
import config from "./config";
import apiRouter from "./api-router";

const server = express();

server.use(express.static("dist"));
server.set("view engine", "ejs");
server.set('views', path.join(__dirname, '../views'));
server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading...",
    predictions: res.predictions
  });
  /* var dataToSend;
  const python = spawn("python", ["./src/server/script1.py"]);
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  }); */
});

server.listen(config.PORT, config.HOST, () =>
  console.log(`Example app listening at ${config.SERVER_URL}`)
);
