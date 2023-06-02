import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 30001;

const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`Running in PORT ${PORT}`));

