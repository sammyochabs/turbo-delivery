import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide your first name"],
    maxlength: [20, "Username cannot be more than 20 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide your last name"],
    maxlength: [20, "Username cannot be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
});

export default mongoose.models.Customer ||
  mongoose.model("Customer", customerSchema);
