# GameHub API - Backend Platform

## 1. Descripción del Proyecto
GameHub es una plataforma backend diseñada para centralizar la gestión de torneos de E-Sports y videojuegos. Permite el registro de usuarios, autenticación segura, vinculación con cuentas de Riot Games, búsqueda de videojuegos mediante integración de APIs externas y un sistema automatizado de *matchmaking* (generación de llaves) para torneos.

## 2. Arquitectura del Sistema
El proyecto está construido bajo una arquitectura de **API RESTful** pura (sin frontend acoplado) utilizando las siguientes tecnologías:

* **Framework:** Next.js 14 (App Router) en modo exclusivamente servidor (API Routes).
* **Lenguaje:** TypeScript, garantizando tipado estático y seguridad en el código.
* **Base de Datos:** PostgreSQL, alojada en Supabase y conectada mediante Connection Pooling (puerto 6543) para soportar entornos serverless.
* **Autenticación:** JSON Web Tokens (JWT) para la protección de rutas privadas.
* **Despliegue:** Vercel (Arquitectura Serverless).
* **Estructura de Carpetas:** Basada en principios de separación de responsabilidades:
  * `/src/app/api`: Controladores y enrutamiento.
  * `/src/config`: Conexión a la base de datos.
  * `/src/lib`: Utilidades como generación y verificación de JWT.
  * `/src/services`: Lógica de negocio e integración con APIs de terceros (RAWG, Riot Games).

## 3. Variables de Entorno Necesarias
Para reproducir este proyecto de manera local, es necesario crear un archivo `.env` en la raíz del proyecto con la siguiente estructura:

```env
# Configuración del servidor
NODE_ENV=development
PORT=3000

# Base de datos (Supabase Transaction Pooler)
DATABASE_URL="postgresql://usuario:password@host:6543/postgres"

# Autenticación
JWT_SECRET="tu_secreto_super_seguro"
JWT_EXPIRES_IN="7d"

# APIs de Terceros
RAWG_API_KEY="tu_api_key_de_rawg"
RIOT_API_KEY="tu_api_key_de_riot_games"
