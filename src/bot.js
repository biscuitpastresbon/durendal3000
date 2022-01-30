"use strict";
exports.__esModule = true;
var sc = require("@nyakimov/senscritique-api");
sc.search("the witcher 3").then(function (res) {
    for (var index = 0; index < res.items.length; index++) {
        var entry = res.items[index];
        console.log(entry.title);
    }
});
