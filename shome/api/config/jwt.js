const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

// 🎯 Tạo token (7 ngày)
exports.generateToken = (user) => {
    return jwt.sign(
        {
            MaKH: user.MaKH,  
            Email: user.Email
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

// 🎯 Xác thực token middleware
exports.verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Không có token hoặc sai định dạng!" });
    }

    const token = authHeader.split(" ")[1]; // Lấy token sau "Bearer "

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token không hợp lệ hoặc đã hết hạn!" });
        }
        req.user = user;
        next();
    });
};
