import express from "express";
import { getTicketsByQuery } from "./getTicketsByQuery.js";
import { TicketFilters } from "./TicketFilters.js";
import { setupAuth } from "./auth.js";

const app = express();

setupAuth(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/tickets-available", (req, res) => {
  return res.json(
    getTicketsByQuery({
      ...req.query,
      [TicketFilters.BY_STATUS.propName]: "upcoming",
    }),
  );
});

app.get("/tickets", (req, res) => {
  return res.json(getTicketsByQuery(req.query));
});

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
