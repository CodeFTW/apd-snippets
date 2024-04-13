import express from "express";
import { EventsCollection } from "./EventsCollection.js";
import { UsersCollection } from "./UsersCollection.js";
import { getTicketsByQuery } from "./getTicketsByQuery.js";
import { TicketFilters } from "./TicketFilters.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/tickets-available", (req, res) => {
  return res.json(
    getTicketsByQuery({
      ...query,
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
