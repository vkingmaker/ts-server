"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
app.listen(3000, function () {
    console.log('listening on port 3000');
});
