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
// Ruta de Login corregida
app.post("/login", async (req, res) => {
  console.log("📨 Body recibido:", req.body);

  const { email, password } = req.body;
  if (!email?.includes("@") || !password) {
    return res.status(400).json({
      success: false,
      error: "Validación fallida",
      message: "Email y contraseña son requeridos",
    });
  }

  try {
    const [rows] = await pool.query(
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        error: "Usuario no encontrado",
        message: "Email o contraseña incorrectos",
      });
    }

    const user = rows[0];
    console.log("✅ Login exitoso. Usuario:", user.usuario);

    res.json({
      success: true,
      user: {
        usuario: user.usuario,
        nombre: user.nombre,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    console.error("💥 Error MySQL:", err);
    res.status(500).json({
      success: false,
      error: "Error en base de datos",
      message: err.message,
    });
  }
});

// Ruta para obtener los datos de un usuario por su nombre de usuario
app.get("/usuario/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const [rows] = await pool.query(`SELECT * FROM users WHERE usuario = ?`, [
      username,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    const user = rows[0];
    res.json({
      success: true,
      user: {
        nombre: user.nombre,
        email: user.email,
        usuario: user.usuario,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    console.error("💥 Error al obtener usuario:", err.message);
    res.status(500).json({
      success: false,
      message: "Error en el servidor",
    });
  }
});

// Ruta para actualizar el perfil
app.post("/actualizar-perfil", async (req, res) => {
  const { username, name, email, newUsername, avatar } = req.body;

  if (!username || !name || !email || !newUsername) {
    return res.status(400).json({
      success: false,
      message: "Todos los campos son obligatorios",
    });
  }

  try {
    const [result] = await pool.query(
      `UPDATE users 
       SET nombre = ?, email = ?, usuario = ?, avatar = ? 
       WHERE usuario = ?`,
      [name, email, newUsername, avatar, username]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    res.json({
      success: true,
      message: "Perfil actualizado correctamente",
    });
  } catch (error) {
    console.error("💥 Error al actualizar perfil:", error.message);
    res.status(500).json({
      success: false,
      message: "Error al actualizar el perfil",
    });
  }
});

// Ruta para cambiar la contraseña (sin bcrypt)
app.post("/cambiar-password", async (req, res) => {
  const { username, currentPassword, newPassword } = req.body;

  if (!username || !currentPassword || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "Todos los campos son obligatorios",
    });
  }

  try {
    // 1. Obtener la contraseña actual
    const [rows] = await pool.query(
      "SELECT password FROM users WHERE usuario = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    const contraseñaHasheada = rows[0].password;

    // 2. Comparar directamente (sin bcrypt)
    if (currentPassword !== contraseñaHasheada) {
      return res.status(401).json({
        success: false,
        message: "Contraseña actual incorrecta",
      });
    }

    // 3. Actualizar la contraseña directamente
    await pool.query("UPDATE users SET password = ? WHERE usuario = ?", [
      newPassword,
      username,
    ]);

    res.json({
      success: true,
      message: "Contraseña actualizada correctamente",
    });
  } catch (error) {
    console.error("💥 Error al cambiar contraseña:", error.message);
    res.status(500).json({
      success: false,
      message: "Error al cambiar la contraseña",
    });
  }
});

// ================== SERVIDOR ================== //
// Puerto configurable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
