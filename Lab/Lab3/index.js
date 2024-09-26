// index.js
var http = require("http");
var employeeModule = require('./Employee.js');

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8082;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Method Not Allowed" }));
        return;
    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
    } else if (req.url === '/employee') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(employeeModule.getAllEmployees()));
    } else if (req.url === '/employee/names') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(employeeModule.getEmployeeNames()));
    } else if (req.url === '/employee/totalsalary') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(employeeModule.getTotalSalary()));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = server; // Export server for testing
