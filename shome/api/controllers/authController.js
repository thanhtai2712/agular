const db = require("../config/database");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../config/jwt");
const jwt = require("jsonwebtoken");

// 🔹 Đăng ký tài khoản
const register = (req, res) => {
    const { TenKH, SDT, Email, MatKhau } = req.body;

    if (!TenKH || !SDT || !Email || !MatKhau) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
    }

    const hashedPassword = bcrypt.hashSync(MatKhau, 10);

    db.query(
        "INSERT INTO khachhang (TenKH, SDT, Email, MatKhau) VALUES (?, ?, ?, ?)",
        [TenKH, SDT, Email, hashedPassword],
        (err, result) => {
            if (err) {
                console.error("Lỗi đăng ký:", err);
                return res.status(500).json({ message: "Lỗi khi đăng ký." });
            }
            res.json({ message: "Đăng ký thành công!" });
        }
    );
};

// 🔹 Đăng nhập
const login = (req, res) => {
    const { Email, MatKhau } = req.body;

    if (!Email || !MatKhau) {
        return res.status(400).json({ message: "Vui lòng nhập email và mật khẩu!" });
    }

    db.query(
        "SELECT MaKH, TenKH, Email, SDT, NgaySinh, MatKhau FROM khachhang WHERE Email = ?",
        [Email],
        (err, results) => {
            if (err) {
                console.error("Lỗi đăng nhập:", err);
                return res.status(500).json({ message: "Lỗi server." });
            }
            if (results.length === 0) {
                return res.status(401).json({ message: "Email không tồn tại!" });
            }

            const user = results[0];
            const isMatch = bcrypt.compareSync(MatKhau, user.MatKhau);
            if (!isMatch) {
                return res.status(401).json({ message: "Mật khẩu không chính xác!" });
            }

            delete user.MatKhau;
            const token = generateToken({ MaKH: user.MaKH, Email: user.Email });

            res.json({ message: "Đăng nhập thành công!", token, user });
        }
    );
};

// 🔹 Đổi mật khẩu

const changePassword = (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    // ✅ Lấy token từ Headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Bạn chưa đăng nhập!" });
    }

    const token = authHeader.split(" ")[1];

    try {
        // ✅ Giải mã token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const MaKH = decoded.MaKH;

        if (!oldPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin." });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: "Mật khẩu mới và xác nhận mật khẩu không khớp." });
        }

        db.query("SELECT MatKhau FROM khachhang WHERE MaKH = ?", [MaKH], (err, results) => {
            if (err) {
                console.error("❌ Lỗi server:", err);
                return res.status(500).json({ message: "Lỗi server." });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "Không tìm thấy tài khoản." });
            }

            const hashedPassword = results[0].MatKhau;
            const match = bcrypt.compareSync(oldPassword, hashedPassword);

            if (!match) {
                return res.status(400).json({ message: "Mật khẩu cũ không đúng." });
            }

            const newHashedPassword = bcrypt.hashSync(newPassword, 10);

            db.query("UPDATE khachhang SET MatKhau = ? WHERE MaKH = ?", [newHashedPassword, MaKH], (err) => {
                if (err) {
                    console.error("❌ Lỗi khi cập nhật mật khẩu:", err);
                    return res.status(500).json({ message: "Lỗi server." });
                }

                res.status(200).json({ message: "Đổi mật khẩu thành công." });
            });
        });
    } catch (error) {
        console.error("❌ Lỗi xác thực token:", error);
        return res.status(401).json({ message: "Token không hợp lệ hoặc đã hết hạn!" });
    }
};


// 🔹 Export module
module.exports = {
    register,
    login,
    changePassword
};
