const config = require("./src/Configs/config");
require("dotenv/config");

// import router
const postsRoute = require("./src/Routes/posts.routes");

// const app = express();
const PORT = process.env.PORT || 8080;

config.app.get("/", (req, res) => {
    res.send("This is home");
});

config.app.use("/posts", postsRoute);

config.app.use("/:param", (req, res) => {
    res.json(req.params.param);
});

config.app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
