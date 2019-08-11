"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.status(200).send("\n  <form method=\"POST\">\n    <div>\n      <label form=\"email\">Email:</label>\n      <input name=\"email\">\n    </div>\n    <div>\n      <label form=\"emapasswordil\">Password:</label>\n      <input name=\"password\" type=\"password\" />\n    </div>\n      <button>Submit</button>\n  </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + password);
});
