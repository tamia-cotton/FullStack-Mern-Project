const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors')
app.use(express.json(), express.urlencoded({extended:true}));

app.use(cors())

require("./server/config/mongoose.config");

require("./server/routes/pet.route")(app)

app.listen(port, () =>
{console.log(`Server is locked and loaded on port ${port}!`)}
);