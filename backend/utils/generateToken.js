import JWT from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = JWT.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("JWT", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //max age of cookie 15 days (defined in milliseconds)
    httpOnly: true, //cookie is only accessible by the server(prevents XSS attacks and not accisible by javascript)
    sameSite: "strict", // CSRF protection(cross site request forgery)
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
