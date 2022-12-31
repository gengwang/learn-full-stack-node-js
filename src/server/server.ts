import express from "express";
import { spawn } from "child_process";

const server = express();
const port = 3000;

server.use(express.static("dist"));

server.get("/", (req, res) => {
  var dataToSend;
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
  });
});

server.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}...`)
);
