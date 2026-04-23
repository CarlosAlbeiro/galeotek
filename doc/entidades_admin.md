# Entidades del Panel Administrativo (Galeotek)

Para que el panel administrativo funcione de manera completa y escalable, más allá del actual esquema básico almacenado en `localStorage`, se identifican las siguientes entidades principales. Estas entidades permitirán gestionar los servicios ofrecidos, las solicitudes de los clientes y el contenido público de la página.

## 1. User / Admin (Usuario Administrador)
Gestiona el acceso al panel administrativo.
* **`id`** (Integer, Auto-incremental): Identificador único.
* **`username`** (String): Nombre de usuario (ej. `cabadmin`).
* **`passwordHash`** (String): Contraseña encriptada por seguridad.
* **`role`** (Enum: `SUPERADMIN`, `EDITOR`): Nivel de permisos.
* **`createdAt`** (Date): Fecha de creación del usuario.
* **`lastLogin`** (Date): Fecha del último acceso.

## 2. Service (Servicio)
Es la entidad central que se muestra en el catálogo (actualmente `ServiceItem` en `admin-store.ts`).
* **`id`** (Integer, Auto-incremental): Identificador único.
* **`title`** (String): Título del servicio (ej. "Desarrollo de software personalizado").
* **`description`** (Text): Descripción detallada del servicio.
* **`icon`** (String): Nombre del icono (ej. usando Lucide icons).
* **`active`** (Boolean): Estado para mostrar u ocultar el servicio en la web pública.
* **`categoryId`** (Integer, Opcional): Referencia a una categoría si se desea agrupar.
* **`createdAt`** (Date): Fecha de creación.
* **`updatedAt`** (Date): Fecha de última actualización.

## 3. Category (Categoría de Servicio) *Opcional*
Útil si el catálogo de servicios crece y necesita organizarse (ej. "Software", "Hardware", "Electricidad").
* **`id`** (Integer, Auto-incremental): Identificador único.
* **`name`** (String): Nombre de la categoría.
* **`description`** (Text): Descripción breve.
* **`active`** (Boolean): Mostrar u ocultar la categoría.

## 4. ServiceRequest / Lead (Solicitud de Servicio)
Almacena los mensajes o solicitudes de cotización que los clientes envían desde la web.
* **`id`** (Integer, Auto-incremental): Identificador único.
* **`customerName`** (String): Nombre del cliente potencial.
* **`customerEmail`** (String): Correo de contacto.
* **`customerPhone`** (String): Teléfono o WhatsApp de contacto.
* **`serviceId`** (Integer, Opcional): Referencia al servicio por el cual están preguntando.
* **`message`** (Text): Detalle de la solicitud o mensaje.
* **`status`** (Enum: `PENDING`, `CONTACTED`, `RESOLVED`, `CANCELLED`): Estado de atención del lead.
* **`createdAt`** (Date): Fecha en la que el cliente envió el formulario.

## 5. PortfolioProject (Proyecto / Portafolio)
Permite mostrar trabajos anteriores para generar confianza en los clientes.
* **`id`** (Integer, Auto-incremental): Identificador único.
* **`title`** (String): Nombre del proyecto o cliente.
* **`description`** (Text): Lo que se logró en el proyecto.
* **`imageUrl`** (String): URL de la imagen representativa.
* **`link`** (String, Opcional): Enlace al proyecto en vivo, si aplica.
* **`active`** (Boolean): Mostrar u ocultar en la web.
* **`createdAt`** (Date): Fecha de publicación.

## 6. Testimonial (Testimonio / Reseña)
Opiniones de clientes satisfechos para la página principal.
* **`id`** (Integer, Auto-incremental): Identificador único.
* **`customerName`** (String): Nombre del cliente.
* **`company`** (String, Opcional): Empresa a la que pertenece el cliente.
* **`content`** (Text): El comentario o reseña.
* **`rating`** (Integer): Calificación (ej. de 1 a 5 estrellas).
* **`active`** (Boolean): Mostrar u ocultar en la web.

---

### Resumen de Relaciones (ERD básico)
- Un **Admin** gestiona todo el sistema.
- Una **Category** tiene muchos **Services** (1 a N).
- Un **ServiceRequest** puede estar relacionado con un **Service** (N a 1).
- Un **PortfolioProject** puede estar relacionado con un **Service** (N a 1).
