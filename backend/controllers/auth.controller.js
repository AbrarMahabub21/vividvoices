import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isCorrectPassword) {
      return res.status(400).json({ error: "Invalid credentials!" });
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user.id,
      fullname: user.fullName,
      userName: user.userName,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log("error in login controller: ", error.message);
    res.status(500).json({ error: "Internal server issue!" });
  }
};

export const logout = (req, res) => {
  res.send("User logout");
};

// signup controller
export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password isn't matching!!" });
    }

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "This user already exists!!" });
    }

    // HASH PASSWORD //
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //profilepic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    // create new user
    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //generate JWT //
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save(); // save user to database
      res.status(201).json({
        _id: newUser.id,
        fullname: newUser.fullName,
        userName: newUser.userName,
        gender: newUser.gender,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.state(400).json({ error: "Invalid user data!" });
    }
  } catch (error) {
    console.log("error in signup controller: ", error.message);
    res.status(500).json({ error: "Internal server issue!" });
  }
};
