const HopDongModel = require("../models/HopDongModel");

const HopDongController = {
  thuePhong: async (req, res) => {
    try {
      const { MaKH, MaPhong, NgayBatDau, ThoiGianThue, PhuongThuc, SoNguoi } = req.body;

      if (!MaKH || !MaPhong || !NgayBatDau || !ThoiGianThue || !PhuongThuc || !SoNguoi) {
        return res.status(400).json({ message: "Thiếu dữ liệu đầu vào!" });
      }

      // Kiểm tra phòng có đang được thuê không
      const phong = await HopDongModel.getPhongById(MaPhong);
      if (!phong) return res.status(404).json({ message: "Phòng không tồn tại" });

      const hopDongHienTai = await HopDongModel.getHopDongHienTai(MaPhong);
      if (hopDongHienTai) {
        return res.status(400).json({ message: "Phòng này vẫn đang được thuê. Vui lòng chờ hợp đồng hiện tại kết thúc." });
      }

      // Kiểm tra ngày bắt đầu hợp lệ (không quá 10 ngày từ ngày hiện tại)
      const today = new Date();
      const ngayBatDauDate = new Date(NgayBatDau);
      const maxNgayBatDau = new Date();
      maxNgayBatDau.setDate(today.getDate() + 10);

      if (ngayBatDauDate < today || ngayBatDauDate > maxNgayBatDau) {
        return res.status(400).json({ message: "Ngày bắt đầu phải sau hôm nay và không quá 10 ngày từ hôm nay." });
      }

      // Tính ngày kết thúc dựa vào thời gian thuê
      let NgayKetThuc = new Date(NgayBatDau);
      if (ThoiGianThue === "6 tháng") NgayKetThuc.setMonth(NgayKetThuc.getMonth() + 6);
      else if (ThoiGianThue === "1 năm") NgayKetThuc.setFullYear(NgayKetThuc.getFullYear() + 1);
      else if (ThoiGianThue === "2 năm") NgayKetThuc.setFullYear(NgayKetThuc.getFullYear() + 2);
      else return res.status(400).json({ message: "Thời gian thuê không hợp lệ!" });

      // Lấy giá dịch vụ
      const GiaTienDien = await HopDongModel.getDichVuByTen("Tiền điện hàng tháng");
      const GiaTienNuoc = await HopDongModel.getDichVuByTen("Tiền nước hàng tháng");

      // Tạo hợp đồng
      const hopdongData = {
        MaKH, MaPhong, NgayBatDau, NgayKetThuc, PhuongThuc, SoNguoi,
        GiaTienHangThang: phong.GiaTienHangThang,
        SoTienCoc: phong.GiaTienCoc,
        GiaTienDien, GiaTienNuoc
      };

      const result = await HopDongModel.thuePhong(hopdongData);
      return res.status(201).json({ message: "Tạo hợp đồng thành công!", hopdong: result });

    } catch (error) {
      console.error("Lỗi server:", error);
      return res.status(500).json({ message: "Lỗi server", error });
    }
  }
};

module.exports = HopDongController;
