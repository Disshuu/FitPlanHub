const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["user","trainer"], default: "user" },
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  purchasedPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plan" }]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
