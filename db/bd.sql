-- Active: 1687979892591@@localhost@3306@wheels_db
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
INSERT INTO generos(nombre) VALUES('Masculino');
INSERT INTO generos(nombre) VALUES('Femenino');
INSERT INTO generos(nombre) VALUES('Otro');

INSERT INTO tipos_documentos(nombre) VALUES('Cédula de ciudadanía');
INSERT INTO tipos_documentos(nombre) VALUES('Cédula de extranjería');
INSERT INTO tipos_documentos(nombre) VALUES('Pasaporte');

INSERT INTO indicativo_paises(nombre) VALUES('+57');

