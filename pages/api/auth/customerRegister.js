import dbConnect from "../../../utils/dbConnection";
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
import Customer from "../../../models/customers";

export default async function (req, res) {
  let { firstName, lastName, address, phone, email, password } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sammymadgenius@gmail.com",
      pass: process.env.gmailPassword,
    },
  });

  let mailOptions = {
    from: email,
    to: "sammymadgenius@gmail.com",
    subject: "Welcome To Turbo Delivery",
    text: "Hello " + firstName + "welcome to turbo delivery",
  };

  try {
    await dbConnect();
  } catch (err) {
    res.json({
      message: "error connecting to the database please check your network",
    });
  }
  const method = req.method;
  const saltRounds = 10;

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
        await Customer.find(
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
                const newCustomer = await Customer.create(req.body);
                transporter.sendMail(mailOptions, function (err, data) {
                  if (err) {
                    console.log("Error " + err);
                  } else {
                    console.log("Email sent successfully");
                    res.status(200).json({ message: "successfull" });
                  }
                });
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
