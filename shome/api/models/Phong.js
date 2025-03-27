const db = require("../config/database");

class Phong {
    static getAll(callback) {
        db.query("SELECT * FROM Phong", callback);
    }

    static getById(id, callback) {
        db.query("SELECT * FROM Phong WHERE id = ?", [id], callback);
    }

    static async rentRoom({ userId, roomId, cmnd, ngayCap, noiCap, paymentMethod, cccdImage }) {
        try {
            // Lấy thông tin khách hàng
            const [customer] = await db.query("SELECT * FROM khachhang WHERE MaKH = ?", [userId]);
            if (!customer.length) throw new Error("Khách hàng không tồn tại");
    
            // Lấy thông tin phòng
            const [room] = await db.query("SELECT * FROM phong WHERE MaPhong = ?", [roomId]);
            if (!room.length) throw new Error("Phòng không tồn tại");
    
            // Lấy thông tin khu trọ
            const [khutro] = await db.query("SELECT * FROM khutro WHERE MaKhuTro = ?", [room[0].MaKhuTro]);
            if (!khutro.length) throw new Error("Khu trọ không tồn tại");
    
            // Xác định trạng thái hợp đồng
            const contractStatus = paymentMethod === "online" ? "Đã thanh toán cọc" : "Chờ thanh toán";
    
            // Ngày bắt đầu hợp đồng (ngày hiện tại)
            const ngayBatDau = new Date().toISOString().split("T")[0];
    
            // Ngày kết thúc hợp đồng (6 tháng sau)
            const ngayKetThuc = new Date();
            ngayKetThuc.setMonth(ngayKetThuc.getMonth() + 6);
            const formattedNgayKetThuc = ngayKetThuc.toISOString().split("T")[0];
    
            // Tạo hợp đồng thuê phòng
            const [contract] = await db.query(
                `INSERT INTO hopdong (MaKH, MaPhong, NgayBatDau, NgayKetThuc, GiaTienHangThang, SoTienCoc, PhuongThuc, TrangThai, SoNguoi) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    userId,
                    roomId,
                    ngayBatDau,
                    formattedNgayKetThuc,
                    room[0].GiaTienHangThang || 0,
                    room[0].SoTienCoc || 0,
                    paymentMethod,
                    contractStatus,
                    1 // Giả định số người mặc định là 1
                ]
            );
    
            return { success: true, contractId: contract.insertId };
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = Phong;
