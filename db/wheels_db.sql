-- Active: 1690333364576@@localhost@3306@wheels_db
CREATE DATABASE IF NOT EXISTS wheels_db;
USE wheels_db;

CREATE TABLE paises(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE departamentos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    id_pais INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_pais) REFERENCES paises(id)
);
CREATE TABLE municipios(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    id_departamento INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_departamento) REFERENCES departamentos(id)
);
CREATE TABLE generos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE tipos_documentos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE indicativo_paises(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE usuarios(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    id_genero INT NOT NULL,
    id_tipo_documento INT NOT NULL,
    numero_documento VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    correo_electronico VARCHAR(50) NOT NULL,
    id_indicativo_pais INT NOT NULL,
    numero_celular VARCHAR(50) NOT NULL,
    conductor BOOLEAN NOT NULL,
    propietario BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_genero) REFERENCES generos(id),
    FOREIGN KEY(id_tipo_documento) REFERENCES tipos_documentos(id),
    FOREIGN KEY(id_indicativo_pais) REFERENCES indicativo_paises(id)
);

CREATE TABLE marcas_vehiculos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE tipos_vehiculos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE tipos_combustible(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE vehiculos(
    id INT NOT NULL AUTO_INCREMENT,
    id_tipos_vehiculo INT NOT NULL,
    id_marca_vehiculo INT NOT NULL,
    modelo INT NOT NULL,
    linea VARCHAR(50) NOT NULL,
    placa VARCHAR(6) NOT NULL,
    cap_pasajeros INT NOT NULL,
    id_propietario INT NOT NULL,
    id_tipo_combustible INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_tipos_vehiculo) REFERENCES tipos_vehiculos(id),
    FOREIGN KEY(id_marca_vehiculo) REFERENCES marcas_vehiculos(id),
    FOREIGN KEY(id_propietario) REFERENCES usuarios(id),
    FOREIGN KEY(id_tipo_combustible) REFERENCES tipos_combustible(id)
);

CREATE TABLE usuarios_conductores(
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_vehiculo INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY(id_vehiculo) REFERENCES vehiculos(id)
);

CREATE TABLE rutas(
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario_conductor INT NOT NULL,
    hora_inicio TIMESTAMP NOT NULL,
    hora_fin TIMESTAMP NOT NULL,
    kilometro_recorrido FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_usuario_conductor) REFERENCES usuarios_conductores(id)
);
CREATE TABLE viajes(
    id INT NOT NULL AUTO_INCREMENT,
    id_ruta INT NOT NULL,
    id_pasajero INT NOT NULL,
    hora_inicio TIMESTAMP NOT NULL,
    hora_fin TIMESTAMP NOT NULL,
    lugar_inicio VARCHAR(50) NOT NULL,
    lugar_fin VARCHAR(50) NOT NULL,
    precio FLOAT NOT NULL,
    completado BOOLEAN NOT NULL,
    comentario_pasajero VARCHAR(500) NOT NULL,
    comentario_conductor VARCHAR(500) NOT NULL,
    calificacion_pasajero INT NOT NULL,
    calificacion_conductor INT NOT NULL,
    kilometro_recorrido FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_ruta) REFERENCES rutas(id),
    FOREIGN KEY(id_pasajero) REFERENCES usuarios(id)
);

INSERT INTO paises(nombre) VALUES('Colombia');
INSERT INTO departamentos(nombre, id_pais) VALUES('Santander', 1);
INSERT INTO municipios(nombre, id_departamento) VALUES('Bucaramanga', 1);
INSERT INTO generos(nombre) VALUES('Masculino'), ('Femenino'), ('Otro');
INSERT INTO tipos_documentos(nombre) VALUES
('Cédula de ciudadanía'),
('Tarjeta de identidad'),
('Registro civil'),
('Cédula de extranjería'),
('Pasaporte');
INSERT INTO indicativo_paises(nombre) VALUES('+57');

INSERT INTO usuarios(nombre, apellido, id_genero, id_tipo_documento, numero_documento, fecha_nacimiento, correo_electronico, id_indicativo_pais, numero_celular, conductor, propietario) VALUES
('Juan', 'Perez', 1, 1, '123456789', '1990-01-01', 'juanperez@gmail.com', 1, '123456789', 1, 1),
('Maria', 'Perez', 2, 1, '123456789', '1990-01-01', 'mariaperez@gmail.com', 1, '123456789', 0, 1),
('Pedro', 'Perez', 1, 1, '123456789', '1990-01-01', 'pedroperez@gmail.com', 1, '123456789', 1, 0),
('Ana', 'Perez', 2, 1, '123456789', '1990-01-01', 'anaperez@gmail.com', 1, '123456789', 0, 0),
('Luis', 'Perez', 1, 1, '123456789', '1990-01-01', 'luisperez@gmail.com', 1, '123456789', 1, 1);

INSERT INTO tipos_vehiculos(nombre) VALUES ('Carro'), ('Moto');
INSERT INTO marcas_vehiculos(nombre) VALUES
("Mazda"),
("Chetvrole"),
("Suzuki"),
("KTM"),
("Honda"),
("Yamaha"),
("Audi"),
("BMW");

INSERT INTO tipos_combustible(nombre) VALUES
("Gasolina"),
("Diesel"),
("Gas"),
("Eléctrico"),
("Híbrido");

INSERT INTO vehiculos(id_tipos_vehiculo, id_marca_vehiculo, modelo, linea, placa, cap_pasajeros, id_propietario, id_tipo_combustible) VALUES
(1, 1, 2020, 'Mazda 3', 'ABC123', 4, 1, 1),
(1, 2, 2020, 'Spark', 'ABC123', 4, 2, 1),
(1, 3, 2020, 'Swift', 'ABC123', 4, 3, 1),
(1, 4, 2020, 'Duke', 'ABC123', 4, 4, 1),
(1, 5, 2020, 'CBR', 'ABC123', 4, 5, 1),
(1, 6, 2020, 'R15', 'ABC123', 4, 1, 1),
(1, 7, 2020, 'A4', 'ABC123', 4, 2, 1),
(1, 8, 2020, 'X5', 'ABC123', 4, 3, 1);

INSERT INTO usuarios_conductores(id_usuario, id_vehiculo) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 6),
(2, 7),
(3, 8);

INSERT INTO rutas(id_usuario_conductor, hora_inicio, hora_fin, kilometro_recorrido) VALUES
(1, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0),
(2, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0),
(3, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0),
(4, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0),
(5, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0),
(6, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0),
(7, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0),
(8, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 0);

INSERT INTO viajes(id_ruta, id_pasajero, hora_inicio, hora_fin, lugar_inicio, lugar_fin, precio, completado, comentario_pasajero, comentario_conductor, calificacion_pasajero, calificacion_conductor, kilometro_recorrido) VALUES
(1, 2, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 'Bucaramanga', 'Bucaramanga', 10000, 1, 'Comentario pasajero', 'Comentario conductor', 5, 5, 0),
(2, 3, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 'Bucaramanga', 'Bucaramanga', 10000, 1, 'Comentario pasajero', 'Comentario conductor', 5, 5, 0),
(3, 4, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 'Bucaramanga', 'Bucaramanga', 10000, 1, 'Comentario pasajero', 'Comentario conductor', 5, 5, 0),
(4, 5, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 'Bucaramanga', 'Bucaramanga', 10000, 1, 'Comentario pasajero', 'Comentario conductor', 5, 5, 0),
(5, 1, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 'Bucaramanga', 'Bucaramanga', 10000, 1, 'Comentario pasajero', 'Comentario conductor', 5, 5, 0),
(6, 2, '2021-10-10T10:00:00', '2021-10-10T10:00:00', 'Bucaramanga', 'Bucaramanga', 10000, 1, 'Comentario pasajero', 'Comentario conductor', 5, 5, 0);