-- db_schema.sql
-- Script de creación de base de datos para Galeotek
-- Modificado para usar INT auto-incrementales

-- 1. Usuarios Administradores
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'EDITOR', -- SUPERADMIN, EDITOR
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
);

-- 2. Categorías de Servicios
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    active BOOLEAN DEFAULT TRUE
);

-- 3. Servicios
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    category_id INT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    icon VARCHAR(50), -- Nombre del icono en Lucide (ej. 'Code2')
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_service_category 
        FOREIGN KEY (category_id) REFERENCES categories(id) 
        ON DELETE SET NULL
);

-- 4. Solicitudes de Servicio (Leads)
CREATE TABLE service_requests (
    id SERIAL PRIMARY KEY,
    service_id INT NULL,
    customer_name VARCHAR(150) NOT NULL,
    customer_email VARCHAR(150),
    customer_phone VARCHAR(50),
    message TEXT,
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, CONTACTED, RESOLVED, CANCELLED
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_request_service 
        FOREIGN KEY (service_id) REFERENCES services(id) 
        ON DELETE SET NULL
);

-- 5. Proyectos de Portafolio
CREATE TABLE portfolio_projects (
    id SERIAL PRIMARY KEY,
    service_id INT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    link VARCHAR(255) NULL,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_project_service 
        FOREIGN KEY (service_id) REFERENCES services(id) 
        ON DELETE SET NULL
);

-- 6. Testimonios
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(150) NOT NULL,
    company VARCHAR(150) NULL,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
