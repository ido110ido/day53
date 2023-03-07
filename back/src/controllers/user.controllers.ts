import express, { Request, Response } from "express";
const userServices = require("../services/user.services");
exports.getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getUsers();
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (e: any) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
exports.addUser = async (req: Request, res: Response) => {
  try {
    const users = await userServices.addUser(req.body);
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (e: any) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
