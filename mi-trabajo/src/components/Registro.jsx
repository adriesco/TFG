import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Registro() {
  // En tu frontend (React)
  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "",
    email: "",
    password: "", // Cambiado de contraseña
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("⚠️ Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          usuario: formData.usuario,
          email: formData.email,
          password: formData.password, // Envía el valor real del formulario
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Error desconocido");

      console.log("Registro exitoso:", data);
      navigate("/iniciarsesion"); // Redirige a la página de inicio de sesión
    } catch (error) {
      console.error("Error completo:", error);
      alert(`❌ Fallo en registro: ${error.message}`);
    }
  };
  return (
    <div className="bg-gradient-to-tr from-black to-green-500 text-white min-h-screen flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-extrabold mr-4">
            Crear una cuenta en{" "}
            <span className="text-green-300">GoFootball</span>
          </h1>
          <svg
            className="w-24 h-24 md:w-28 md:h-28"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
              fill="#0000f"
              stroke="none"
            >
              <path d="M2620 9469 c-297 -19 -518 -53 -699 -110 -129 -41 -355 -154 -470 -237 -117 -83 -325 -282 -353 -336 -11 -23 -45 -76 -75 -118 -95 -135 -188 -391 -228 -623 -49 -284 -47 -219 -52 -2695 -5 -2766 -3 -2871 73 -3208 52 -234 158 -478 281 -652 90 -126 293 -329 409 -407 246 -167 558 -276 894 -312 231 -25 684 -30 2750 -30 2157 0 2491 4 2740 35 336 41 605 132 848 289 123 80 325 286 421 430 197 294 302 651 331 1125 14 227 13 4791 0 5045 -25 447 -103 730 -280 1017 -173 277 -439 495 -767 626 -223 89 -459 137 -793 162 -165 12 -4831 11 -5030 -1z m2727 -1044 c910 -118 1630 -834 1755 -1745 28 -209 11 -505 -42 -723 -122 -507 -431 -945 -868 -1235 -224 -148 -445 -239 -727 -299 -118 -25 -149 -27 -340 -27 -301 0 -489 37 -791 154 -301 118 -397 135 -688 127 -217 -6 -407 -30 -572 -72 -54 -14 -106 -25 -116 -25 -23 0 -56 45 -64 88 -9 47 3 57 163 122 369 150 438 194 462 296 15 63 11 72 -79 210 -178 269 -289 562 -336 884 -22 154 -15 469 15 612 70 344 204 627 427 904 315 392 791 660 1289 728 137 19 370 19 512 1z m-1477 -4405 c6 -11 10 -58 8 -108 l-3 -87 -65 -1 c-126 -2 -162 -43 -164 -188 l-1 -91 97 -3 c60 -2 100 -7 106 -15 6 -7 13 -44 17 -83 8 -85 -4 -104 -64 -104 -21 0 -66 -3 -100 -6 l-62 -7 1 -381 c1 -210 1 -387 1 -393 -1 -21 -199 -18 -223 4 -17 15 -18 41 -18 398 l0 383 -44 -5 c-39 -5 -46 -2 -56 18 -18 33 -25 151 -11 177 10 18 21 22 60 22 l49 0 4 133 c3 111 7 140 26 182 30 65 85 122 147 151 44 21 65 24 167 24 107 0 118 -2 128 -20z m2664 -10 c21 -4 43 -15 47 -22 5 -7 9 -127 9 -266 l0 -252 49 38 c63 50 121 66 215 60 176 -11 322 -154 365 -356 17 -81 14 -288 -5 -353 -41 -136 -122 -244 -226 -299 -53 -28 -76 -35 -143 -38 -96 -5 -147 7 -213 51 l-49 34 -11 -29 c-13 -36 -47 -48 -134 -48 -119 0 -108 -80 -108 756 0 680 1 723 18 727 31 8 146 7 186 -3z m1832 0 c68 0 64 45 64 -746 0 -671 -1 -715 -17 -722 -10 -4 -57 -7 -105 -7 -70 0 -91 3 -105 18 -17 17 -18 59 -18 733 0 624 2 716 15 725 8 6 41 8 74 5 32 -4 74 -6 92 -6z m414 -10 c20 -20 20 -33 20 -723 0 -592 -2 -706 -14 -723 -13 -16 -27 -19 -111 -19 -84 0 -98 3 -111 19 -12 17 -14 134 -14 737 l0 718 38 4 c20 2 67 4 105 5 55 2 71 -2 87 -18z m-2722 -302 l3 -148 70 0 c106 0 109 -3 109 -115 l0 -95 -77 -2 c-43 0 -84 -1 -90 -1 -10 1 -13 -57 -13 -258 0 -336 3 -345 123 -337 l52 3 3 -90 c2 -64 -1 -96 -11 -109 -18 -24 -125 -33 -209 -17 -90 18 -138 49 -174 113 l-29 53 -3 318 -3 317 -38 0 c-22 0 -44 6 -51 15 -6 8 -14 50 -17 94 -7 97 1 111 63 111 l44 0 0 130 0 129 38 10 c88 24 120 29 162 28 l45 -2 3 -147z m-4113 -143 c33 -9 79 -28 102 -44 l41 -29 6 23 c7 29 24 35 112 42 64 5 74 3 93 -16 l22 -22 -3 -532 c-3 -523 -4 -533 -26 -599 -45 -133 -164 -250 -297 -293 -116 -37 -295 -21 -409 37 -61 31 -136 91 -136 108 0 21 86 129 114 141 19 9 32 5 77 -24 68 -42 110 -57 166 -57 155 0 243 93 243 257 l0 63 -49 -33 c-102 -70 -237 -77 -350 -17 -106 57 -174 148 -221 295 -19 58 -22 93 -22 200 0 114 3 140 27 210 54 161 135 248 270 291 55 18 169 17 240 -1z m1078 -14 c112 -44 210 -161 253 -306 25 -81 25 -283 1 -374 -40 -147 -138 -266 -258 -312 -54 -20 -82 -24 -175 -24 -107 0 -112 1 -187 38 -173 86 -268 280 -253 522 14 240 121 400 311 468 71 25 228 19 308 -12z m1457 -7 c156 -74 256 -239 267 -444 8 -129 -10 -223 -59 -321 -51 -102 -117 -170 -205 -212 -58 -27 -82 -32 -163 -35 -147 -6 -231 27 -332 130 -181 186 -184 591 -6 784 50 55 102 90 173 116 40 14 72 18 155 15 93 -2 112 -6 170 -33z m953 -2 c37 -18 89 -55 115 -81 55 -55 113 -161 133 -241 21 -87 17 -261 -9 -345 -43 -140 -140 -262 -252 -314 -49 -23 -68 -26 -170 -26 -109 0 -119 2 -183 32 -122 58 -212 175 -248 323 -18 73 -18 281 0 345 35 122 118 239 209 292 73 43 118 53 232 50 95 -3 111 -6 173 -35z m2395 24 c64 -17 144 -67 178 -111 14 -18 34 -58 44 -89 19 -51 20 -84 20 -435 l0 -378 -31 -7 c-40 -8 -136 -6 -169 3 -16 4 -29 18 -35 37 l-10 30 -42 -26 c-103 -65 -250 -78 -348 -30 -99 48 -160 158 -159 285 3 209 176 324 474 313 l91 -3 -7 45 c-9 64 -39 117 -77 136 -53 28 -163 30 -245 5 -98 -30 -117 -28 -135 12 -26 57 -42 137 -31 154 35 56 350 94 482 59z" />
              <path d="M4875 8228 c-177 -20 -403 -87 -570 -170 -187 -93 -306 -179 -464 -332 -271 -264 -444 -574 -521 -931 -28 -126 -38 -437 -21 -583 92 -751 647 -1385 1372 -1566 338 -85 657 -73 984 35 586 194 1042 676 1200 1269 159 595 16 1209 -389 1673 -285 326 -695 545 -1124 602 -117 16 -342 17 -467 3z m468 -233 c265 -40 527 -138 662 -249 l30 -25 -38 -16 c-22 -9 -59 -17 -83 -18 -42 -2 -54 -9 -35 -22 24 -14 91 -341 91 -443 l0 -68 -72 -39 c-40 -21 -144 -78 -231 -127 -87 -48 -165 -88 -173 -88 -9 0 -79 27 -157 61 -78 33 -180 74 -227 91 -47 17 -128 48 -182 70 -83 35 -97 44 -101 66 -2 15 -21 119 -42 232 l-37 205 55 51 c30 28 122 96 205 151 l149 100 -13 33 c-8 18 -14 36 -14 41 0 14 99 11 213 -6z m-1205 -283 c-4 -25 -1 -28 23 -24 34 5 360 -43 428 -64 62 -18 64 -21 80 -169 7 -60 19 -144 27 -185 23 -124 23 -124 -71 -230 -47 -52 -149 -175 -228 -272 l-142 -178 -135 1 c-74 1 -177 4 -229 8 l-94 6 -28 105 c-16 58 -45 168 -65 245 -20 79 -43 145 -51 152 -15 11 -15 16 -1 51 25 64 164 275 236 358 54 63 234 223 251 224 2 0 1 -13 -1 -28z m1905 -674 c58 -30 404 -305 442 -349 l26 -32 16 23 c27 39 138 139 145 132 4 -4 17 -61 29 -127 30 -157 32 -407 6 -535 -34 -162 -121 -420 -142 -420 -13 0 -155 174 -155 190 0 5 -17 1 -37 -9 -21 -11 -101 -45 -177 -76 -77 -31 -175 -74 -218 -96 -44 -22 -84 -36 -90 -33 -7 4 -55 52 -107 107 -53 55 -144 140 -203 189 l-108 90 5 52 c3 28 12 139 21 246 17 227 41 399 56 418 6 7 106 60 222 119 116 58 215 109 221 114 12 12 22 11 48 -3z m-1884 -567 l95 -6 36 -70 c68 -135 118 -221 197 -340 44 -66 90 -138 103 -160 l22 -40 -64 -185 c-36 -102 -71 -207 -78 -233 -7 -27 -19 -51 -27 -54 -8 -3 -78 -1 -156 6 -78 6 -188 13 -245 17 l-102 6 -11 -31 c-6 -17 -14 -31 -19 -31 -24 0 -202 255 -285 408 l-67 123 25 37 c14 20 35 71 47 112 26 89 101 308 124 365 37 88 30 85 179 84 72 -1 174 -4 226 -8z m1371 -597 c69 -70 160 -151 203 -181 42 -30 77 -58 77 -62 0 -19 -204 -504 -226 -538 -13 -21 -13 -23 7 -23 29 0 239 -111 239 -126 0 -23 -209 -105 -360 -141 -133 -31 -333 -41 -459 -23 -49 7 -95 16 -101 20 -17 10 46 129 74 140 21 9 21 9 1 9 -36 1 -264 217 -401 380 l-25 30 25 58 c13 32 45 119 70 193 83 241 68 216 144 239 80 24 569 147 597 150 6 0 67 -56 135 -125z" />
              <path d="M6704 3322 c-86 -41 -118 -126 -113 -304 4 -108 7 -130 29 -173 44 -86 144 -118 236 -76 82 37 119 122 119 271 0 146 -27 221 -97 273 -39 29 -122 33 -174 9z" />
              <path d="M1795 3326 c-46 -20 -93 -80 -111 -142 -12 -42 -15 -85 -12 -163 3 -95 7 -112 33 -160 40 -73 84 -101 156 -101 75 0 115 27 153 104 26 51 30 72 34 165 5 124 -11 200 -55 252 -47 56 -130 75 -198 45z" />
              <path d="M2765 3317 c-149 -85 -146 -464 5 -544 104 -55 207 -11 251 106 60 162 14 387 -91 443 -48 25 -116 23 -165 -5z" />
              <path d="M4221 3323 c-72 -36 -113 -135 -113 -278 -1 -195 77 -304 209 -293 89 8 136 60 169 189 39 153 -21 343 -122 385 -44 19 -101 17 -143 -3z" />
              <path d="M5172 3319 c-157 -79 -158 -466 -2 -546 70 -36 159 -26 202 23 59 68 89 199 71 315 -14 86 -54 171 -95 201 -45 32 -121 35 -176 7z" />
              <path d="M7734 2990 c-137 -20 -204 -66 -204 -141 0 -53 14 -78 55 -95 101 -42 220 24 244 134 6 29 11 66 11 82 0 33 -6 35 -106 20z" />
            </g>
          </svg>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
        >
          <div>
            <label className="block font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Nombre de Usuario</label>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="correo@example.com"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="block w-full bg-green-500 text-white font-semibold py-2 text-center rounded-lg hover:bg-green-700 transition"
          >
            Registrarse
          </button>

          <p className="text-sm mt-2">
            ¿Ya tienes cuenta?{" "}
            <Link to="/iniciarsesion" className="text-blue-300 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
