import fetchMock from 'fetch-mock';
console.log("Test 1: importing fetchMock gives an undefined error")
fetchMock.mock('*', 200);