import { EventsCollection } from "./EventsCollection.js";
import { TicketFilters } from "./TicketFilters.js";

export function getTicketsByQuery(query) {
  Object.values(TicketFilters).forEach(({ isRequired, propName }) => {
    if (isRequired && !query[propName]) {
      throw new Error(`Query parameter "${propName}" is required`);
    }
  });

  return EventsCollection.find().filter((event) => {
    return Object.values(TicketFilters).every((ticketFilterEnum) =>
      ticketFilterEnum.execute({
        event,
        query,
      }),
    );
  });
}
