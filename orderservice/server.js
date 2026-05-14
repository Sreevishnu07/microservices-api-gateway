const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        service: "Order Service",
        message: "Order service is running"
    });
});

app.listen(3002, () => {
    console.log("Order service running on port 3002");
});