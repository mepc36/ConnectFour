const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.listen(port, () => console.log(`Listening on port ${port}!`));

// app.post('/connectFour', (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
//   res.end('End of response!');
// })