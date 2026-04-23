-- db_seed.sql
-- Datos de prueba iniciales (mock data) para Galeotek

-- 1. Usuario Admin (pass: admin1029, asumiendo un hash ficticio para el ejemplo)
INSERT INTO users (id, username, password_hash, role) VALUES 
(1, 'cabadmin', '$2b$10$ficticioHASHparaejemploADMIN1029', 'SUPERADMIN');

-- 2. Categorías
INSERT INTO categories (id, name, description, active) VALUES 
(1, 'Desarrollo Web & Software', 'Soluciones de software y desarrollo a medida.', TRUE),
(2, 'Soporte y Mantenimiento', 'Mantenimiento de hardware, instalaciones y soporte técnico.', TRUE);

-- 3. Servicios
INSERT INTO services (id, category_id, title, description, icon, active) VALUES 
(1, 1, 'Desarrollo de software personalizado', 'Aplicaciones a la medida para automatizar y escalar tu negocio.', 'Code2', TRUE),
(2, 1, 'Páginas web para emprendedores', 'Sitios modernos, rápidos y optimizados para vender más.', 'Globe', TRUE),
(3, 2, 'Mantenimiento de computadores', 'Diagnóstico, reparación y optimización de equipos.', 'Wrench', TRUE),
(4, 2, 'Servicios eléctricos para el hogar', 'Instalaciones seguras, certificadas y a tiempo.', 'Zap', TRUE),
(5, 2, 'Instalación de cámaras de seguridad', 'Vigila tu hogar o negocio desde tu celular las 24 horas.', 'Camera', TRUE),
(6, 1, 'Asesoría tecnológica', 'Te guiamos paso a paso para tomar las mejores decisiones tech.', 'Brain', TRUE);

-- 4. Solicitudes de Servicio (Leads)
INSERT INTO service_requests (id, service_id, customer_name, customer_email, customer_phone, message, status) VALUES 
(1, 2, 'Juan Pérez', 'juan@ejemplo.com', '+573001234567', 'Hola, necesito una cotización para una landing page para mi negocio de repostería.', 'PENDING'),
(2, 3, 'María Gómez', 'maria.g@ejemplo.com', '+573119876543', 'Tengo un computador que está muy lento y creo que necesita limpieza o cambio de disco.', 'CONTACTED');

-- 5. Proyectos de Portafolio
INSERT INTO portfolio_projects (id, service_id, title, description, image_url, link, active) VALUES 
(1, 2, 'E-commerce para Tienda de Ropa', 'Desarrollo completo de una tienda virtual optimizada para móviles con pasarela de pagos integrada.', '/images/portfolio/tienda-ropa.jpg', 'https://tiendaderopa.com', TRUE),
(2, 5, 'Circuito de Seguridad CCTV', 'Instalación de 8 cámaras de seguridad IP en un edificio residencial con monitoreo remoto.', '/images/portfolio/camaras-edificio.jpg', NULL, TRUE);

-- 6. Testimonios
INSERT INTO testimonials (id, customer_name, company, content, rating, active) VALUES 
(1, 'Carlos Rodríguez', 'Ferretería El Tornillo', 'El equipo de Galeotek nos desarrolló un software de inventario excelente. Nos ahorró muchísimo tiempo.', 5, TRUE),
(2, 'Ana Martínez', NULL, 'Vinieron a hacer mantenimiento a mi PC y quedó como nuevo. Excelente servicio y muy cumplidos.', 5, TRUE);
