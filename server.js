const express = require("express");
const { once } = require("nodemon");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

const PORT = process.envPORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`);
    });
});


// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.use(require("./routes"));

// mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/NoSQL-SocialNetwork", {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

