import { TicketFilters } from "./TicketFilters.js";

const DATA = [
  { property: "isRequired" },
  { property: "propName" },
  { property: "execute" },
];
describe("TicketFilters", () => {
  DATA.forEach(({ property }) => {
    test(`${property} is present`, () => {
      Object.values(TicketFilters).forEach((ticketFilter) => {
        expect(ticketFilter[property]).toBeDefined();
      });
    });
  });
});
