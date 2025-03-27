const db = require("../config/database");

const HopDongModel = {
  // Kiểm tra phòng đang thuê
  getHopDongHienTai: async (MaPhong) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM hopdong WHERE MaPhong = ? AND NgayKetThuc >= CURDATE()";
      db.query(sql, [MaPhong], (err, results) => {
        if (err) return reject(err);
        resolve(results.length ? results[0] : null);
      });
    });
  },

  // Lấy thông tin phòng
  getPhongById: async (MaPhong) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT GiaTienHangThang, GiaTienCoc FROM phong WHERE MaPhong = ?";
      db.query(sql, [MaPhong], (err, result) => {
        if (err) return reject(err);
        resolve(result.length ? result[0] : null);
      });
    });
  },

  // Lấy giá dịch vụ theo tên
  getDichVuByTen: async (tenDichVu) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT SoTien FROM dichvu WHERE TenDichVu = ?";
      db.query(sql, [tenDichVu], (err, results) => {
        if (err) return reject(err);
        resolve(results.length ? results[0].SoTien : 0);
      });
    });
  },

  // Thêm hợp đồng thuê phòng
  thuePhong: async (data) => {
    return new Promise((resolve, reject) => {
      const sql = `
        INSERT INTO hopdong (MaKH, MaPhong, NgayBatDau, NgayKetThuc, GiaTienHangThang, SoTienCoc, PhuongThuc, TrangThai, SoNguoi, GiaTienDien, GiaTienNuoc)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const values = [
        data.MaKH, data.MaPhong, data.NgayBatDau, data.NgayKetThuc,
        data.GiaTienHangThang, data.SoTienCoc, data.PhuongThuc,
        "Đã thanh toán cọc", data.SoNguoi, data.GiaTienDien, data.GiaTienNuoc
      ];

      db.query(sql, values, (err, result) => {
        if (err) return reject(err);

        // Cập nhật trạng thái phòng
        const updatePhongSQL = "UPDATE phong SET TrangThai = 'phòng đã cho thuê' WHERE MaPhong = ?";
        db.query(updatePhongSQL, [data.MaPhong], (err, res) => {
          if (err) return reject(err);
          resolve({ hopdong: result, phong: "Cập nhật trạng thái phòng thành công" });
        });
      });
    });
  }
};

module.exports = HopDongModel;
