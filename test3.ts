import * as fetchMock from 'fetch-mock';
console.log("Test 3: fetchMock has type errors using import * as fetchMock");
fetchMock.mock('*', 200);