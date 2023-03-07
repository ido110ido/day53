import express, { Request, Response } from "express";
const userController = require("../../controllers/user.controllers.ts");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.addUser);

// router.post("/add", async (req: Request, res: Response) => {
//   const data = await addUser(req.body); // add req.body as an argument
//   // let data = req.body;
//   res.send(JSON.stringify(data));
// });

// router.delete("/delete", async (req: Request, res: Response) => {
//   const data = await deleteUser(req.body.id); // add req.body as an argument
//   res.send(JSON.stringify(data));
// });

// router.post("/logIn", async (req: Request, res: Response) => {
//   const data = await deleteUser(req.body.id); // add req.body as an argument
//   res.send(JSON.stringify(data));
// });

// router.post("/register", async (req, res) => {
//   try {
//     const { first_name, last_name, email, password } = req.body;
//     if (!(email && password && first_name && last_name)) {
//       res.status(400).send("All input is required");
//     }
//     const oldUser = await getUsers().filter((e: any) => e.email === email);
//     if (oldUser) {
//       return res.status(409).send("User Already Exist. Please Login");
//     }
//     //Encrypt user password
//     const encryptedPassword = await bcrypt.hash(password, 10);

//     // Create user in our database
//     const data = await registerNewUser({
//       first_name,
//       last_name,
//       email: email.toLowerCase(), // sanitize: convert email to lowercase
//       password: encryptedPassword,
//     });
//     res.status(201).json(data);
//   } catch (err) {
//     console.log(err);
//   }
// });

export default router;
