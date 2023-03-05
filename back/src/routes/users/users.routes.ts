import express, { Request, Response } from "express";
import { addUser, deleteUser, getUsers } from "../../services/user.services";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await getUsers();
  res.send(JSON.stringify(users));
});

router.post("/add", async (req: Request, res: Response) => {
  const data = await addUser(req.body); // add req.body as an argument
  // let data = req.body;
  res.send(JSON.stringify(data));
});

router.delete("/delete", async (req: Request, res: Response) => {
  const data = await deleteUser(req.body.id); // add req.body as an argument
  res.send(JSON.stringify(data));
});

export default router;
