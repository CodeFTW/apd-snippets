import { UsersCollection } from "./UsersCollection.js";
import { EventsCollection } from "./EventsCollection.js";
import { TicketFilters } from "./TicketFilters.js";

export function getTicketsByQuery(query) {
  Object.values(TicketFilters).forEach(({ isRequired, propName }) => {
    if (isRequired && !query[propName]) {
      throw new Error(`Query parameter "${propName}" is required`);
    }
  });

  const user = UsersCollection.find().find(
    (user) => user.userId === +query.userId,
  );

  return EventsCollection.find().filter((event) => {
    return Object.values(TicketFilters).every(({ execute }) =>
      execute({
        event,
        user,
        query,
      }),
    );
  });
}
