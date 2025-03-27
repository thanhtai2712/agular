const db = require("../config/database");
const jwt = require("jsonwebtoken");

// Middleware xác thực JWT
const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Không có token!" });

    jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Token không hợp lệ!" });

        console.log("🔍 Token decoded:", decoded); // Kiểm tra token có gì
        req.user = decoded;

        next();
    });
};


// Cập nhật thông tin cá nhân
const updateUser = (req, res) => {
    const { TenKH, SDT, Email, NgaySinh, DiaChi } = req.body;
    const MaKH = req.user.MaKH; // 👀 MaKH lấy từ token

    console.log("🔍 MaKH từ token:", MaKH); // Kiểm tra MaKH có đúng không

    if (!MaKH) {
        return res.status(400).json({ message: "Không tìm thấy MaKH trong token!" });
    }

    const sql = `UPDATE khachhang SET TenKH=?, SDT=?, Email=?, NgaySinh=?, DiaChi=? WHERE MaKH=?`;
    db.query(sql, [TenKH, SDT, Email, NgaySinh, DiaChi, MaKH], (err, result) => {
        if (err) return res.status(500).json({ message: "Lỗi cập nhật!", error: err });

        console.log("✅ Kết quả MySQL:", result);

        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Không có dữ liệu nào được cập nhật. Kiểm tra lại MaKH!" });
        }

        res.json({ message: "Cập nhật thành công!", data: req.body });
    });
};



module.exports = { updateUser, verifyToken };
