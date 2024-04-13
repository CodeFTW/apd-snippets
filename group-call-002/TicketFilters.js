export const TicketFilters = {
    BY_NAME: {
        propName: 'eventName',
        isRequired: false,
        execute({query: {eventName}, event}) {
            return !eventName || event.eventName.includes(eventName);
        },
    },
    BY_DATE: {
        propName: 'eventDate',
        isRequired: false,
        execute({query: {eventDate}, event}) {
            return !eventDate || event.eventDate === eventDate;
        },
    },
    BY_QUANTITY: {
        propName: 'quantity',
        isRequired: true,
        execute({query: {quantity}, event}) {
            return !quantity || event.quantity >= quantity;
        },
    },
    BY_STATUS: {
        propName: 'status',
        isRequired: false,
        execute({query: {status}, event}) {
            return !status || event.eventStatus === status;
        },
    },
    BY_USER_VIP: {
        propName: 'quantity',
        isRequired: false,
        execute({event, user}) {
            return user?.isVIP || !event.onlyVIPUsers;
        },
    },
};
