import * as fs from "fs";
import path from "path";
interface User {
  name: string;
  owes: { [key: string]: number } | [];
  owed_by: { [key: string]: number } | [];
  balance: number;
}

interface Users {
  users: User[];
}
const filePath = path.join(__dirname, "userData.json");
export const getUsers = () => {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

export const addUser = (user: any) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  data.users.push(user);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 1), "utf8");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

export const deleteUser = (userToDelete: string) => {
  const data: Users = JSON.parse(fs.readFileSync(filePath, "utf8"));
  data.users = data.users.filter((user) => user.name !== userToDelete);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};
