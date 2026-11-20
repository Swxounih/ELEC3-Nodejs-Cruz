const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hi, My Name is Armel Meinard Cruz, tonight I studying node packages. Right now i decided to install express package and run a simple server using express.",
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// To run this code, make sure you have Node.js installed. Then, follow these steps:
// 1. Create a new directory for your project and navigate into it.
// 2. Run `npm init -y` to create a package.json file.
// 3. Run `npm install express` to install the express package.
// 4. Run `node index.js` or `npm start` to start the server.
// Also, you can use `npx prettier --write index.js` to format your code using Prettier.
// the prettier package is installed as a dev dependency, so you can use npx to run it without installing it globally. Prettier will automatically format your code according to its default rules, making it more readable and consistent.

