import dbConnect from "../../../utils/dbConnection";
const bcrypt = require("bcrypt");
import Picker from "../../../models/picker";

export default async function (req, res) {
  try {
    await dbConnect();
  } catch (err) {
    res.json({
      message: "error connecting to the database please check your network",
    });
  }
  const method = req.method;
  const saltRounds = 10;

  let { firstName, lastName, address, phone, email, password } = req.body;
  let hashedPassword = "";

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      hashedPassword = hash;
      req.body.password = hash;
    });
  });

  if (firstName.length < 1 || email.length < 1 || password.length < 1) {
    res.json({ message: "please fill all fields" });
  } else {
    if (method === "POST") {
      try {
        await Picker.find(
          { email: req.body.email },
          async function (err, users) {
            if (err) {
              res.json({ err: err });
            } else if (!err && users.length > 0) {
              res.json({
                message:
                  "this email has already been registerd with turbo delivery",
              });
            } else if (!err && users.length < 1) {
              if (hashedPassword !== "") {
                const newPicker = await Picker.create(req.body);
                res.status(200).json({ message: "successfull" });
              } else if (hashedPassword === "") {
                res.json({
                  message:
                    "there seem to be a problem please try again in a few minutes time",
                });
              }
            }
          }
        );
      } catch (err) {
        res.status(400).json({ error: err });
      }
    }
  }
}
