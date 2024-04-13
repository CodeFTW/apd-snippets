import { asyncLocalStorage } from "./asl.js";

export const setUserFromRequest = (req) => {
  asyncLocalStorage.getStore().set("userId", req.query.userId);
};

export const setupAuth = (app) => {
  app.use((req, res, next) => {
    if (!req.query.userId) {
      next();
    }

    asyncLocalStorage.run(new Map(), () => {
      setUserFromRequest(req);
      next();
    });
  });
};

export const getUserIdOrNull = () => {
  return asyncLocalStorage.getStore()?.get("userId") || null;
};
