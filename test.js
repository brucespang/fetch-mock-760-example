"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_mock_1 = require("fetch-mock");
console.log("Test 1: importing fetchMock gives an undefined error");
fetch_mock_1.default.mock('*', 200);
