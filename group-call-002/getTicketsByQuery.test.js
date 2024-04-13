import { getTicketsByQuery } from "./getTicketsByQuery.js";

describe("getTicketsByQuery", () => {
  test("returns empty array when there are no events", () => {
    const events = getTicketsByQuery({
      eventName: "Con",
      quantity: 101,
      status: "upcoming",
    });
    expect(events.length).toBe(0);
  });
  test(`returns all events with "Con" for VIP User`, () => {
    const events = getTicketsByQuery({
      quantity: 1,
      userId: 1,
      eventName: "Con",
    });
    expect(events.length).toBe(2);
  });
});
