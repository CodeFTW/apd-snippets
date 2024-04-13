import { getTicketsByQuery } from "./getTicketsByQuery.js";

const DATA = [
  {
    title: "Con, 101 tickets, upcoming",
    input: {
      eventName: "Con",
      quantity: 101,
      eventStatus: "upcoming",
    },
    expected: 0,
  },
  {
    title: "Con, 1 tickets for user 1",
    input: {
      quantity: 1,
      userId: 1,
      eventName: "Con",
    },
    expected: 2,
  },
];

describe("getTicketsByQuery", () => {
  DATA.forEach(({ input, expected, title }) => {
    test(`returns ${expected === 0 ? "no" : expected} events with ${title}`, () => {
      const events = getTicketsByQuery(input);
      expect(events.length).toBe(expected);
    });
  });
});
