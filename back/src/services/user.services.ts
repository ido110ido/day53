let data = require("../routes/data/userData.json");
const fs = require("fs");
export const getUsers = () => {
  return data.users;
};

export const addUser = (user: any) => {
  data.users.push(user);
  fs.writeFileSync("./routes/data/userData.json", JSON.stringify(data)); // write updated data back to file
  return data.users;
};

export const getIOU = (iou: string) => {
  console.log(iou);
  return iou;
};
