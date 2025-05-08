require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise"); // Usamos la versión Promise
const cors = require("cors");

const app = express();

// Configuración de CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MySQL
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Gordo2005.",
  database: "gofootball",
  waitForConnections: true,
  connectionLimit: 10,
});

// ================== RUTAS ================== //

// Ruta de Registro (la que ya tenías)
app.post("/registro", async (req, res) => {
  console.log("📨 Body recibido:", req.body);

  const { nombre, email, password, usuario } = req.body;
  if (!nombre?.trim() || !email?.includes("@") || !password) {
    return res.status(400).json({
      error: "Validación fallida",
      requeridos: {
        nombre: "string no vacío",
        email: "debe contener @",
        password: "string no vacío",
      },
      recibido: req.body,
    });
  }

  try {
    const [result] = await pool.query(
      `INSERT INTO users (nombre, usuario, email, password) 
       VALUES (?, ?, ?, ?)`,
      [nombre, usuario || null, email, password]
    );

    console.log("✅ Registro exitoso. ID:", result.insertId);
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error("💥 Error MySQL:", err.code, err.message);
    res.status(500).json({
      error: "Error en base de datos",
      detalle: err.message,
      código: err.code,
    });
  }
});

// Ruta de Login (nueva)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Buscar usuario en MySQL
    const [users] = await pool.query(
      "SELECT id, nombre, email, usuario FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Email o contraseña incorrectos",
      });
    }

    // 2. Responder con los datos del usuario (sin password)
    const user = users[0];
    res.json({
      success: true,
      message: "Inicio de sesión exitoso",
      user,
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({
      success: false,
      message: "Error en el servidor",
    });
  }
});

// Puerto configurable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
