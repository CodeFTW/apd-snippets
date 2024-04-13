const equals = (a, b) => {
  return a === b;
};

const includes = (a, b) => {
  return a.includes(b);
};

const greaterOrEqualThan = (a, b) => {
  return a >= b;
};

const executor = ({ query, event, filterEnum }) => {
  const propFromQuery = query[filterEnum.propName];
  const propFromEvent = event[filterEnum.propName];
  return !propFromQuery || filterEnum.operator(propFromEvent, propFromQuery);
};

const defaultExecute = function (arg) {
  return executor({ ...arg, filterEnum: this });
};
export const TicketFilters = {
  BY_NAME: {
    propName: "eventName",
    isRequired: false,
    operator: includes,
    execute: defaultExecute,
  },
  BY_DATE: {
    propName: "eventDate",
    isRequired: false,
    operator: equals,
    execute: defaultExecute,
  },
  BY_TYPE: {
    propName: "eventType",
    isRequired: false,
    operator: equals,
    execute: defaultExecute,
  },
  BY_QUANTITY: {
    propName: "quantity",
    isRequired: true,
    operator: greaterOrEqualThan,
    execute: defaultExecute,
  },
  BY_STATUS: {
    propName: "eventStatus",
    isRequired: false,
    operator: equals,
    execute: defaultExecute,
  },
  BY_USER_VIP: {
    propName: "onlyVIPUsers",
    isRequired: false,
    execute({ event, user }) {
      return user?.isVIP || !event.onlyVIPUsers;
    },
  },
};
