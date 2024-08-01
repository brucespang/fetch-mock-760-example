"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchMock = require("fetch-mock");
console.log("Test 3: fetchMock has type errors using import * as fetchMock");
fetchMock.mock('*', 200);
