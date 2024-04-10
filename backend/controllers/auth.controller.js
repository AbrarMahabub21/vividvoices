import User from "../models/user.model.js";

export const login = (req, res) => {
  res.send("User login");
};

export const logout = (req, res) => {
  res.send("User logout");
};

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password isn't matching!!" });
    }

    const user = await User.findOne(userName);
    if (user) {
      return res.status(400).json({ error: "This user already exists!!" });
    }

    // HASH PASSWORD //
  } catch (error) {}
};
