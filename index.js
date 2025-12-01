const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "API 正常运行！" });
});

app.listen(3000, () => {
  console.log("服务器启动在 3000 端口");
});
