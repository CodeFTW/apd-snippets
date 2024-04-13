import { TicketFilters } from "./TicketFilters.js";

describe("TicketFilters", () => {
    test("isRequired is present", () => {
        Object.values(TicketFilters).forEach(({ isRequired }) => {
            expect(isRequired).toBeDefined();
        });
    });
    test("propName is present", () => {
        Object.values(TicketFilters).forEach(({ propName }) => {
            expect(propName).toBeDefined();
        });
    });
});
