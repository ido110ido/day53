import * as fs from "fs";
import path from "path";
import { IUser } from "../interface/User";
import UserModel from "../model/user.model";
exports.getUsers = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};
exports.addUser = async (user: IUser) => {
  const _user = new UserModel(user);
  try {
    await _user.save();
    return _user;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};
// export const getUsers = () => {
//   return JSON.parse(fs.readFileSync(filePath, "utf8"));
// };

// export const addUser = (user: any) => {
//   const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   data.users.push(user);
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 1), "utf8");
//   return JSON.parse(fs.readFileSync(filePath, "utf8"));
// };

// export const deleteUser = (userToDelete: string) => {
//   const data: Users = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   data.users = data.users.filter((user) => user.name !== userToDelete);
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
//   return JSON.parse(fs.readFileSync(filePath, "utf8"));
// };

// export const registerNewUser = (newUser: any) => {
//   const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   data.users.push(newUser);
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 1), "utf8");
//   return JSON.parse(fs.readFileSync(filePath, "utf8"));
// };
