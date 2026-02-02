# Trabajo Práctico Intermedio - Sistema de Gestión Veterinaria

Trabajo práctico intermedio del curso de Desarrollo Web Back-End UTN - Micaela Asselborn

## 📋 Descripción

Sistema de gestión para una clínica veterinaria que permite administrar usuarios, mascotas y consultas clínicas. Implementa autenticación JWT con roles de usuario (cliente, veterinario, administrador) y operaciones CRUD para diferentes entidades.

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución JavaScript
- **TypeScript** - Superset tipado de JavaScript
- **Express.js** - Framework web para Node.js
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT (JSON Web Tokens)** - Autenticación y autorización
- **bcrypt** - Hashing de contraseñas
- **express-validator** - Validación de datos de entrada
- **CORS** - Habilitación de peticiones cross-origin

## 🏗️ Arquitectura

El proyecto sigue una arquitectura modular con separación de responsabilidades:

```
src/
├── config/          # Configuración de base de datos
├── controllers/     # Lógica de controladores HTTP
├── middlewares/     # Middlewares personalizados
├── models/          # Modelos de datos (Mongoose)
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── types/           # Definiciones de tipos TypeScript
└── validators/      # Validaciones de entrada
```

## 🔐 Roles de Usuario

- **Cliente (client)**: Puede registrarse y autenticarse
- **Veterinario (vet)**: Acceso completo a gestión de mascotas y consultas clínicas
- **Administrador (admin)**: Gestión completa de usuarios del sistema

## 📚 API Endpoints

### Autenticación

- `POST /api/auth/register` - Registro de nuevos usuarios
- `POST /api/auth/login` - Inicio de sesión

### Usuarios (Solo Admin)

- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear nuevo usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### Mascotas (Solo Veterinarios)

- `GET /api/pets` - Obtener todas las mascotas
- `GET /api/pets/:id` - Obtener mascota por ID
- `POST /api/pets` - Crear nueva mascota
- `PUT /api/pets/:id` - Actualizar mascota
- `DELETE /api/pets/:id` - Eliminar mascota

### Consultas Clínicas (Solo Veterinarios)

- `GET /api/pets` - Obtener todas las consultas
- `GET /api/pets/:id` - Obtener consulta por ID
- `POST /api/pets` - Crear nueva consulta
- `DELETE /api/pets/:id` - Eliminar consulta

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- MongoDB (local o en la nube)
- npm o yarn

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/MicaelaAsselborn/tp-intermedio-micaela-asselborn.git
cd tp-intermedio-micaela-asselborn
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/veterinary-clinic
JWT_SECRET=tu_clave_secreta_jwt_muy_segura
```

4. Compila el proyecto:

```bash
npm run build
```

## 🚀 Ejecución

### Modo Desarrollo

```bash
npm run dev
```

### Modo Producción

```bash
npm run build
npm start
```

El servidor se ejecutará en `http://localhost:8000`

## 📋 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor en modo desarrollo con recarga automática
- `npm run build` - Compila TypeScript a JavaScript
- `npm start` - Ejecuta el servidor en modo producción

## 🧪 Testing

Para probar la API, puedes usar los archivos de curl incluidos en la carpeta `curls/`:

- `curls-auth.md` - Comandos para autenticación
- `curls-users.md` - CRUD de usuarios
- `curls-pets.md` - CRUD de mascotas
- `curls-clinic.md` - CRD de consultas clínicas

También puedes usar herramientas como Postman, Thunder Client o Insomnia.

## 🔒 Validaciones

### Usuarios

- **Username**: Mínimo 3 caracteres, solo letras, números y guion bajo
- **Email**: Formato válido de email
- **Password**: Mínimo 8 caracteres, al menos 1 número, 1 mayúscula y 1 carácter especial
- **Role**: "client", "vet" o "admin"

### Mascotas

- **Name**: Obligatorio, texto
- **Species**: Obligatorio, texto
- **OwnerId**: Obligatorio, ID de usuario válido
- **VetId**: Obligatorio, ID de usuario válido

### Consultas Clínicas

- **PetId**: Obligatorio, ID de mascota válido
- **VetId**: Obligatorio, ID de veterinario válido
- **Consult**: Obligatorio, descripción de la consulta
- **Treatment**: Obligatorio, tratamiento prescrito

## 👤 Autor

**Micaela Asselborn** - [GitHub](https://github.com/MicaelaAsselborn)
