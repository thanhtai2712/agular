const Phong = require("../models/Phong");

const getAllPhong = (req, res) => {
    Phong.getAll((err, results) => {
        if (err) return res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        res.json(results);
    });
};

const getPhongById = (req, res) => {
    const { id } = req.params;
    Phong.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        if (results.length === 0) return res.status(404).json({ error: "Không tìm thấy phòng" });
        res.json(results[0]);
    });
};

// API thuê phòng
const rentRoom = async (req, res) => {
    try {
        const response = await Phong.rentRoom(req.body);
        res.status(201).json({ message: "Đặt phòng thành công", contractId: response.contractId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllPhong, getPhongById, rentRoom };
