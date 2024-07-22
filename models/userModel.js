import validator from "validator";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A username must be specified."],
    },
    email: {
      type: String,
      required: [true, "You need to provide a valid email address."],
      unique: true,
      lowercase: true,
      validate: [
        validator.isEmail,
        "You need to provide a valid email address.",
      ],
      select: false,
    },
    completedQuests: [String],
    profilePicture: {
      type: String,
    },
    tester: {
      type: Boolean,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "You need to provide a valid password."],
      minlength: 6,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "You need to provide a valid password."],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
      },
    },

    passwordChangedAt: Date,
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function (timestamp) {
  if (this.passwordChangedAt) {
    return parseInt(this.passwordChangedAt.getTime() / 1000, 10) > timestamp;
  }
  return false;
};

userSchema.virtual("rank").get(function () {
  const num = this.completedQuests.length;
  if (num >= 40) {
    return {
      rankName: "Master",
      rankColor: "#BF6DD8",
    };
  } else if (num >= 20) {
    return {
      rankName: "Expert",
      rankColor: "#57A5ED",
    };
  } else if (num >= 10) {
    return {
      rankName: "Intermediate",
      rankColor: "#8DBB6E",
    };
  } else if (num >= 0) {
    return {
      rankName: "Novice",
      rankColor: "#D6B06C",
    };
  }
});
const User = mongoose.model("User", userSchema);
export default User;
