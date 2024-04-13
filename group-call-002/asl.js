import { AsyncLocalStorage } from "async_hooks";

// needs to be centralized, so we can share the same instance across test code and also production code
export const asyncLocalStorage = new AsyncLocalStorage();
