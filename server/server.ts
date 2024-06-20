import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());

app.get("/api/my-plants", (req, res) => {});

app.post("/api/create-plants", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}/`);
});
