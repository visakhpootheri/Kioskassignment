var mysql = require("mysql");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
var con = mysql.createConnection({
  database: "kiosk",
  user: "root",
  password: "Visakh@97",
  host: "localhost",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.post("/insertrating", (req, res) => {
  let rating = req.body.rating;
  let ans1=req.body.ans1
  let ans2=req.body.ans2
  let ans3=req.body.ans3
  let ans4=req.body.ans4
  let ans5=req.body.ans5
  console.log("kk", rating);
  var sql =
    "insert into tblsurvey(txt1Qnrating,txt2Qnrating,txt3Qnrating,txt4Qnrating,txtfeedback) values('"+ans1+"','"+ans2+"','"+ans3+"','"+ans4+"','"+ans5+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.listen(8000, () => {
  console.log("listening on port");
});
