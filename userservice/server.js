const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        service: "User Service",
        message: "User service is running"
    });
});

app.listen(3001, () => {
    console.log("User service running on port 3001");
});