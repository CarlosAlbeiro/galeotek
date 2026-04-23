-- db_hardcoded_data.sql
-- Script exclusivo para migrar los datos que actualmente están "quemados" (hardcoded)
-- en el archivo src/lib/admin-store.ts

-- 1. Insertar el Usuario Administrador quemado en el código
INSERT INTO users (id, username, password_hash, role) 
VALUES (
    1, 
    'cabadmin', 
    '$2b$10$ficticioHASHparaejemploADMIN1029', 
    'SUPERADMIN'
);

-- 2. Insertar los Servicios quemados en el código (DEFAULT_SERVICES)
INSERT INTO services (id, category_id, title, description, icon, active) VALUES 
(1, NULL, 'Desarrollo de software personalizado', 'Aplicaciones a la medida para automatizar y escalar tu negocio.', 'Code2', TRUE),
(2, NULL, 'Páginas web para emprendedores', 'Sitios modernos, rápidos y optimizados para vender más.', 'Globe', TRUE),
(3, NULL, 'Mantenimiento de computadores', 'Diagnóstico, reparación y optimización de equipos.', 'Wrench', TRUE),
(4, NULL, 'Servicios eléctricos para el hogar', 'Instalaciones seguras, certificadas y a tiempo.', 'Zap', TRUE),
(5, NULL, 'Instalación de cámaras de seguridad', 'Vigila tu hogar o negocio desde tu celular las 24 horas.', 'Camera', TRUE),
(6, NULL, 'Asesoría tecnológica', 'Te guiamos paso a paso para tomar las mejores decisiones tech.', 'Brain', TRUE);
