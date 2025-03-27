const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require("./routes/userRoutes");
const phongRoutes = require("./routes/phongRoutes");
const hopdongRoutes = require('./routes/hopdongRoutes');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/phong", phongRoutes);
app.use('/api/hopdong', hopdongRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));
