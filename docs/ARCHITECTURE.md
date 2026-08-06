# Arquitectura de ORBIT

# Objetivo

Construir una plataforma de comercio electrónico moderna, escalable y segura, especializada en productos tecnológicos mediante un modelo de Dropshipping.

---

# Arquitectura General

ORBIT está dividido en tres aplicaciones principales.

apps/

- web → Tienda para clientes.
- api → Backend y API REST.
- admin → Panel administrativo.

---

# Tecnologías

## Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Zustand
- Axios

## Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT
- bcrypt

---

# Principios del Proyecto

- Código limpio.
- Componentes reutilizables.
- Arquitectura modular.
- Seguridad desde el inicio.
- Escalabilidad.
- Documentación constante.

---

# Convenciones

## Carpetas

Siempre en minúsculas.

Ejemplo:

components

services

layouts

hooks

---

## Componentes

Siempre en PascalCase.

Ejemplo:

Navbar.tsx

ProductCard.tsx

ShoppingCart.tsx

---

## Hooks

Siempre empiezan con "use".

Ejemplo:

useAuth.ts

useCart.ts

useProducts.ts

---

## Servicios

Siempre terminan en Service.

Ejemplo:

authService.ts

productService.ts

paymentService.ts

---

## Variables

Siempre descriptivas.

Ejemplo:

productPrice

customerEmail

supplierId

Nunca:

x

dato

test

---

## Funciones

Siempre comienzan con un verbo.

Ejemplo:

createOrder()

loginUser()

calculateTotal()

updateProduct()

---

# Filosofía

No construiremos una simple tienda.

Construiremos una plataforma preparada para crecer.

Cada decisión técnica deberá facilitar el mantenimiento, la escalabilidad y la reutilización del código.

---

# Regla Principal

Antes de escribir código:

1. Diseñar.
2. Documentar.
3. Desarrollar.
4. Probar.
5. Documentar nuevamente.