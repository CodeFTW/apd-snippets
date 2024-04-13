import { getUserIdOrNull } from "./auth.js";
import { UsersCollection } from "./UsersCollection.js";

export const getUserOrNull = () => {
  const userId = getUserIdOrNull();
  const user = UsersCollection.find().find((user) => user.userId === +userId);
  return user || null;
};
