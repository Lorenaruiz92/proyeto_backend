const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    email:{ type: String, required: true},
    password: { type: String, required: true},
  },
{
  timestamps: true,
}
);

userSchema.pre("save" function() {
   this.password = bcrypt.hashSync(this.password, 8);
})



const User = mongoose.model("users", userSchema, "users");
module.exports = User;