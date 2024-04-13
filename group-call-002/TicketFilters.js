import { createEnum } from "./createEnum";

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
  if (!propFromQuery) {
    return true;
  }

  const propFromEvent = event[filterEnum.propName];
  return filterEnum.operator(propFromEvent, propFromQuery);
};

const defaultExecute = function (arg) {
  return executor({ ...arg, filterEnum: this });
};

const isVIPUser = ({ event, user }) => {
  return user?.isVIP || !event.onlyVIPUsers;
};

export const TicketFilters = createEnum(
  {
    BY_NAME: {
      propName: "eventName",
      isRequired: false,
      operator: includes,
    },
    BY_DATE: {
      propName: "eventDate",
      isRequired: false,
    },
    BY_TYPE: {
      propName: "eventType",
      isRequired: false,
    },
    BY_QUANTITY: {
      propName: "quantity",
      isRequired: true,
      operator: greaterOrEqualThan,
    },
    BY_STATUS: {
      propName: "eventStatus",
      isRequired: false,
    },
    BY_USER_VIP: {
      propName: "onlyVIPUsers",
      isRequired: false,
      execute: isVIPUser,
    },
  },
  { defaultFields: { execute: defaultExecute, operator: equals } },
);
