import userStatus from "@app/src/model_helpers/user_status";

export default () => {
  const userStatusKeys = Object.keys(userStatus);
  let randomNumber = Math.floor(Math.random() * userStatusKeys.length);
  return userStatus[userStatusKeys[randomNumber]];
};
