# 📘 ProjectFlow Frontend - Arquitectura y Estructura

Este documento describe la arquitectura del frontend de **ProjectFlow**, una aplicación Angular diseñada con enfoque corporativo (similar a herramientas como Jira o Notion). Su objetivo es servir como guía de referencia para saber **dónde debe ir cada archivo o funcionalidad**.

---

# 🧭 Principios de arquitectura

Este proyecto sigue estos principios:

- 📦 Separación por responsabilidades (no por tipo de archivo)
- 🧱 Escalabilidad tipo empresa real
- 🔁 Reutilización controlada
- 🚫 Evitar acoplamiento entre features
- 🧠 Código mantenible a largo plazo

---

# 📁 Estructura general del proyecto

Todo el código fuente vive dentro de:

```
src/app/
```

Estructura base:

```
src/app/
 ├── core/
 ├── shared/
 ├── features/
 ├── app.routes.ts
 ├── app.component.ts
 └── app.config.ts
```

---

# 🧱 1. CORE (núcleo de la aplicación)

📌 Contiene lógica global y servicios únicos de la app.

## 🔥 Qué va aquí

- Autenticación (AuthService)
- Interceptores HTTP
- Guards de rutas
- Configuración global
- Servicios singleton

## ❌ Qué NO va aquí

- Componentes visuales reutilizables
- Lógica de negocio específica de un módulo
- Pantallas o páginas

## 📁 Ejemplo

```
core/
 ├── services/
 │    └── auth.service.ts
 ├── guards/
 │    └── auth.guard.ts
 ├── interceptors/
 │    └── http.interceptor.ts
 └── models/ (opcional globales)
```

---

# 🧩 2. SHARED (reutilizable)

📌 Componentes, pipes y utilidades reutilizables en toda la app.

## 🔥 Qué va aquí

- Componentes UI genéricos
- Botones, inputs, modales
- Pipes (formatos, transformaciones)
- Directivas

## ❌ Qué NO va aquí

- Lógica de negocio
- Servicios de API
- Features completas (tasks, projects, etc.)

## 📁 Ejemplo

```
shared/
 ├── components/
 │    ├── button/
 │    ├── modal/
 │    └── input/
 ├── pipes/
 ├── directives/
 └── utils/
```

---

# 🧠 3. FEATURES (dominio de la aplicación)

📌 Aquí vive la lógica de negocio real.

Cada feature es un módulo independiente del resto.

## 🔥 Qué va aquí

- Pantallas (pages)
- Servicios específicos de dominio
- Estado local de la feature
- Componentes propios del módulo

---

## 🧩 Features actuales del proyecto

### 👤 auth/

- Login
- Register
- Gestión de sesión

### 📁 projects/

- Crear proyectos
- Listar proyectos
- Detalle de proyecto

### 📝 tasks/

- CRUD de tareas
- Estados (TODO / IN_PROGRESS / DONE)
- Asignación de usuarios

### 📊 dashboard/

- Métricas generales
- Resumen de actividad

---

## 📁 Ejemplo de estructura de feature

```
features/tasks/
 ├── pages/
 │    ├── task-list/
 │    └── task-detail/
 ├── components/
 ├── services/
 ├── models/
 └── tasks.routes.ts
```

---

# 🛣️ Routing (app.routes.ts)

📌 Define las rutas principales de la aplicación.

## 🔥 Buenas prácticas

- Lazy loading por feature
- No cargar todo el app en el inicio

## 📁 Ejemplo

```ts
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes'),
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/projects/projects.routes'),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./features/tasks/tasks.routes'),
  },
];
```

---

# ⚙️ app.config.ts

📌 Configuración global de Angular.

Aquí van:

- providers globales
- configuración HTTP
- interceptores

---

# 🚀 Lazy Loading (OBLIGATORIO)

📌 Cada feature se carga bajo demanda.

## ✔️ Beneficios

- Mejor rendimiento
- Menor bundle inicial
- Escalabilidad real

---

# 🧠 Reglas de oro del proyecto

## ❗ Regla 1

Si algo es reutilizable → `shared/`

## ❗ Regla 2

Si algo es lógica de negocio → `features/`

## ❗ Regla 3

Si algo es global o infraestructura → `core/`

## ❗ Regla 4

No mezclar responsabilidades entre carpetas

---

# ⚠️ Errores comunes a evitar

- Meter servicios de negocio en `core`
- Crear componentes sueltos sin feature
- No usar lazy loading
- Mezclar UI con lógica de negocio

---

# 🧭 Cómo usar este documento

Antes de crear cualquier archivo:

👉 Pregúntate:

- ¿Es global? → core
- ¿Es reutilizable? → shared
- ¿Es funcionalidad de negocio? → features

---

# 🎯 Objetivo final de esta arquitectura

Tener una base que:

- escale como en empresa real
- sea mantenible por múltiples desarrolladores
- evite caos en el frontend
- permita crecer en funcionalidades sin refactor constante

---

# 🧠 Nota final

Esta arquitectura no es rígida, es evolutiva.

Se irá refinando conforme el proyecto crezca (como en equipos reales de producto).
