import mongoose, { Schema } from "mongoose"
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: [true, "Password is requird"]
    },
    refreshToken: {
        type: String,
    },

}, { timestamps: true })

// Hash password before saving
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)