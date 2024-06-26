import JWT from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.JWT;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized access!- No token provided" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized access!- Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute: ", error.message);
    res.status(500).json({ error: "internal server error!" });
  }
};

export default protectRoute;
