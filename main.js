const express = require('express');

const app = express();

console.log("hello")

app.listen(8000, () => console.log("Server started on port 8000"));