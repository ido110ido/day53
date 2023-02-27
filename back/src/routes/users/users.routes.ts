import express, { Request, Response } from "express";
import { addUser, getIOU, getUsers } from "../../services/user.services";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await getUsers();
  res.send(JSON.stringify(users));
});

router.post("/add", async (req: Request, res: Response) => {
  console.log("a");

  const user = await addUser(req.body); // add req.body as an argument
  res.send(user);
});

router.post("/iou", async (req: Request, res: Response) => {
  const user = await getIOU(req.body); // add req.body as an argument
  res.send(user);
});

export default router;
