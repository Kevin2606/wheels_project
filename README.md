# Wheels Project 🚗 🏍️

## Descripcion
El proyecto Wheels será una plataforma revolucionaria de movilización urbana que tiene como objetivo conectar a personas que necesitan desplazarse a una ubicación cercana con conductores que tienen puestos disponibles en sus vehículos y que transitan por esa zona. Esta plataforma brindará beneficios tanto a los pasajeros como a los conductores. Por un lado, los pasajeros podrán acceder a precios más económicos al compartir el viaje con otros usuarios que tienen un destino similar. Por otro lado, los conductores obtendrán un beneficio económico al aprovechar los espacios vacíos en sus vehículos mientras se desplazan del punto A al punto B. Además de los beneficios económicos, el proyecto también busca contribuir al cuidado del medio ambiente al reducir las emisiones de gases producidas por los automóviles y motocicletas, generando un impacto positivo en la calidad del aire y la sostenibilidad urbana. En resumen, Wheels Project se presenta como una solución integral para la movilidad urbana, fomentando la eficiencia, la economía colaborativa y la protección del medio ambiente.

## Objetivos generales del proyecto Wheels:

- Mejorar la movilidad urbana: El objetivo principal de Wheels es mejorar la movilidad en áreas urbanas al ofrecer una plataforma que conecte a personas que necesitan desplazarse con conductores que tienen puestos disponibles en sus vehículos.

- Promover la economía colaborativa: Wheels fomenta la economía colaborativa al permitir a los usuarios compartir sus viajes y aprovechar los espacios vacíos en los vehículos de los conductores, lo que resulta en precios más económicos para los pasajeros y beneficios económicos para los conductores.

- Reducir las emisiones de gases y el impacto ambiental: El proyecto busca contribuir a la reducción de las emisiones de gases producidas por los automóviles y motocicletas al fomentar el uso compartido de vehículos. Esto tiene un impacto positivo en la calidad del aire y la sostenibilidad urbana.

## Objetivos específicos del proyecto Wheels:

- Desarrollar una plataforma tecnológica intuitiva y fácil de usar: Uno de los objetivos es crear una plataforma digital que sea accesible y fácil de utilizar tanto para los pasajeros como para los conductores, con una interfaz intuitiva que facilite la búsqueda, reserva y pago de los viajes compartidos.

- Atraer a una amplia base de usuarios: Es fundamental para el éxito del proyecto atraer a un gran número de usuarios tanto conductores como pasajeros. Esto implica implementar estrategias de marketing y promoción efectivas para dar a conocer la plataforma y sus beneficios.

- Garantizar la seguridad y confiabilidad: La seguridad y la confiabilidad son aspectos críticos en el proyecto Wheels. Es necesario establecer medidas y políticas claras para verificar la identidad de los conductores y pasajeros, así como para asegurar la calidad y estado de los vehículos utilizados en los viajes compartidos.

- Establecer alianzas estratégicas con empresas y organizaciones: Para impulsar la adopción del servicio y ampliar su alcance, es importante establecer alianzas con empresas, organizaciones y entidades gubernamentales relevantes. Estas alianzas pueden ayudar a promover el proyecto y facilitar la integración de Wheels en los planes de movilidad urbana existentes.

- Medir y evaluar el impacto ambiental y social: Para evaluar la efectividad del proyecto, es importante medir y evaluar el impacto ambiental y social generado por el uso compartido de vehículos en la plataforma. Esto implica realizar análisis de datos, recopilar retroalimentación de los usuarios y realizar estudios comparativos con respecto a otros modos de transporte.

## Diseño de base de datos
![Diagrama BD](./src/img/Diagrama%20BD.png)


## Instalacion y uso
Para hacer uso de **Wheels Project**  se debe tener instalado [GIT](https://git-scm.com/), [Node.js](https://nodejs.org/es/) y [Mysql](https://www.mysql.com/downloads/).

### Clonar el repositorio
```bash
git clone https://github.com/Kevin2606/wheels_project.git
```
> Una vez clonado el repositorio accede a la carpeteta del proyecto
### Instalar dependencias
```bash
npm install
```
### Configurar variables de entorno
Crear un archivo .env en la raiz del proyecto
```bash
touch .env
```
> Nota: Este comando solo funciona en sistemas operativos basados en Unix.
> Si estas en Windows puedes crear el archivo .env desde el explorador de archivos

Una vez creado el archivo .env, accede a el desde un editor de texto
Agregar las siguientes variables de entorno
```bash
SERVER_CONFIG={"hostname": "localhost", "port": 8080}

DB_CONFIG={"host": "localhost", "user": "", "password": "", "port": 3306, "database": "wheels_db"}

JWT_SECRET="secret"
```
> Nota: En el campo hostname y port de SERVER_CONFIG se recomienda en el hostname dejar el valor de "localhost" y en el port se puede cambiar a un puerto que no este en uso, por ejemplo 8080, 3000, 5000, etc. El rango de puertos disponibles es de 0 a 65535, se recomienda no utilizar los puertos reservados que van del 0 al 1023, para mas informacion sobre los puertos reservados [click aqui](https://es.wikipedia.org/wiki/Anexo:Puertos_de_red_utilizados_por_protocolos_de_transporte)
>
> Nota: En el campo user y password de DB_CONFIG se debe agregar el usuario y contraseña de la base de datos mysql, tambien tener en cuenta que el puerto de mysql por defecto es 3306, si se tiene configurado otro puerto se debe cambiar en el campo port de DB_CONFIG
> 
> Nota: En el campo JWT_SECRET se debe agregar una cadena de texto que sera utilizada para la generacion de tokens JWT, esta cadena de texto puede ser cualquiera, como el que esta por ejemplo: "secret".

>**Cada cambio en las variables de entorno requiere reiniciar el servidor para que los cambios surtan efecto.**

### Base de datos
En la carpeta **db** se encuentra el archivo **wheels_db.sql** que contiene el script para crear la base de datos y las tablas necesarias para el funcionamiento del proyecto, ejecute el script en su gestor de base de datos mysql para crear la base de datos y las tablas.

> Nota: El proyecto se encuentra en una version de desarrollo, se añaden datos de prueba en las tablas de la base de datos para facilitar el uso de la plataforma.

### Iniciar el servidor
Para iniciar el servidor se debe ejecutar dos comandos en la terminal, el primero es para compilar el codigo y el segundo para iniciar el servidor, se deben ejecutar en orden y en terminales separadas.
```bash
npm run tsc
```
En la siguiente imagen se muestra el resultado de ejecutar el comando anterior
![image](https://github.com/Kevin2606/wheels_project/assets/54305330/4d7c76b3-9a84-4b79-9956-10dc27ea9192)
```bash
npm run dev
```
En la siguiente imagen se muestra el resultado de ejecutar el comando anterior
![image](https://github.com/Kevin2606/wheels_project/assets/54305330/09e35c3c-6ea2-48de-b36b-626e6ad5b17c)

### Uso de la plataforma
Para hacer uso de la plataforma se debe contar con herramientas informaticas para la realizacion de pruebas de api como **[Thunder Client](https://www.thunderclient.com/)** o **[Postman](https://www.postman.com/)**, ademas necesitas obtener un token de autenticacion, para esto se debe hacer una peticion GET a la ruta **/api/token** con la query tabla y especificar a que tabla se quiere hacer la peticion, las tablas disponibles son: **usuarios**, **vehiculos** y **usuarios-conductores**, **rutas**, **viajes**, el siguiente ejemplo muestra como obtener un token de autenticacion para la tabla usuarios.
```bash
http://localhost:8080/api/token?tabla=usuarios
```

En la siguiente imagen se muestra el resultado de ejecutar el comando anterior
![image](https://github.com/Kevin2606/wheels_project/assets/54305330/02321bd0-8e27-4cc1-85a3-341af59324c6)

#### Query tabla
| Tabla | Descripcion |
| ----- | ----------- |
| usuarios | Tabla que contiene los datos de los usuarios registrados en la plataforma |
| vehiculos | Tabla que contiene los datos de los vehiculos registrados en la plataforma |
| usuarios-conductores | Tabla que contiene los datos de los usuarios conductores registrados en la plataforma |
| rutas | Tabla que contiene los datos de las rutas registradas en la plataforma |
| viajes | Tabla que contiene los datos de los viajes registrados en la plataforma |

> Nota: El token de autenticacion tiene una duracion de 1 hora, despues de ese tiempo se debe volver a solicitar un nuevo token.

Una vez obtenido el token de autenticacion para poder hacer uso de el se debe enviar en el header de la peticion con el nombre **Authorization**, este solo funcionara para las peticiones que se hagan a la tabla especificada en la peticion GET para obtener el token, en el siguiente ejemplo se muestra como enviar el token de autenticacion en el header de la peticion usando **[Thunder Client](https://www.thunderclient.com/)**.

![image](https://github.com/Kevin2606/wheels_project/assets/54305330/675682a1-1c0b-4261-b790-12be7cb176e0)

> Nota: Si se quiere hacer peticiones a otra tabla se debe obtener un nuevo token.

Para hacer uso de la plataforma se debe hacer peticiones a las rutas disponibles, en la siguiente tabla se muestran las rutas disponibles y los metodos que se pueden usar en cada una de ellas.

| Ruta | Metodo | Descripcion |
| ---- | ------ | ----------- |
| /api/usuarios | GET | Obtiene todos los usuarios registrados en la plataforma |
| /api/usuarios | POST | Registra un nuevo usuario en la plataforma |
| /api/usuarios/:id | GET | Obtiene un usuario especifico por su id |
| /api/usuarios/:id | PUT | Actualiza un usuario especifico por su id |
| /api/usuarios/:id | DELETE | Elimina un usuario especifico por su id |
| /api/vehiculos | GET | Obtiene todos los vehiculos registrados en la plataforma |
| /api/vehiculos | POST | Registra un nuevo vehiculo en la plataforma |
| /api/vehiculos/:id | GET | Obtiene un vehiculo especifico por su id |
| /api/vehiculos/:id | PUT | Actualiza un vehiculo especifico por su id |
| /api/vehiculos/:id | DELETE | Elimina un vehiculo especifico por su id |
| /api/usuarios-conductores | GET | Obtiene todos los usuarios conductores registrados en la plataforma |
| /api/usuarios-conductores | POST | Registra un nuevo usuario conductor en la plataforma |
| /api/usuarios-conductores/:id | GET | Obtiene un usuario conductor especifico por su id |
| /api/usuarios-conductores/:id | PUT | Actualiza un usuario conductor especifico por su id |
| /api/usuarios-conductores/:id | DELETE | Elimina un usuario conductor especifico por su id |
| /api/rutas | GET | Obtiene todas las rutas registradas en la plataforma |
| /api/rutas | POST | Registra una nueva ruta en la plataforma |
| /api/rutas/:id | GET | Obtiene una ruta especifica por su id |
| /api/rutas/:id | PUT | Actualiza una ruta especifica por su id |
| /api/rutas/:id | DELETE | Elimina una ruta especifica por su id |
| /api/viajes | GET | Obtiene todos los viajes registrados en la plataforma |
| /api/viajes | POST | Registra un nuevo viaje en la plataforma |
| /api/viajes/:id | GET | Obtiene un viaje especifico por su id |
| /api/viajes/:id | PUT | Actualiza un viaje especifico por su id |
| /api/viajes/:id | DELETE | Elimina un viaje especifico por su id |
| /api/token | GET | Obtiene un token de autenticacion para hacer peticiones a las rutas de las tablas especificadas en la query tabla |


> Nota: En los metodos POST de las rutas, estas esperan un valor requerido en el body de la peticion, en la siguiente tabla se muestran los valores requeridos para cada ruta.
|

#### Ruta - /api/usuarios

| Valores requeridos | Tipo de dato |
| ------------------ | ------------ |
| nombre | String |
| apellido | String |
| genero | Number |
| tipo_documento | Number |
| numero_documento | String |
| fecha_nacimiento | Date |
| correo_electronico | String |
| indicativo_pais | Number |
| numero_celular | String |
| conductor | Boolean |
| propietario | Boolean |
> Nota: El tipo Date se debe enviar en el siguiente formato: YYYY-MM-DD

#### Ruta - /api/vehiculos

| Valores requeridos | Tipo de dato |
| ------------------ | ------------ |
| tipo_vehiculo | Number |
| marca_vehiculo | Number |
| modelo | Number |
| linea | String |
| placa | String |
| cap_pasajeros | Number |
| propietario | Number |
| tipo_combustible | Number |

#### Ruta - /api/usuarios-conductores

| Valores requeridos | Tipo de dato |
| ------------------ | ------------ |
| usuario | Number |
| vehiculo | Number |

#### Ruta - /api/rutas

| Valores requeridos | Tipo de dato |
| ------------------ | ------------ |
| usuario_conductor | Number |
| hora_inicio | Date |
| hora_fin | Date |
| kilometro_recorrido | Number |
> Nota: El tipo Date se debe enviar en el siguiente formato: YYYY-MM-DDTHH:mm:ss, ejemplo: 2021-10-10T10:00:00


#### Ruta - /api/viajes

| Valores requeridos | Tipo de dato |
| ------------------ | ------------ |
| ruta | Number |
| pasajero | Number |
| hora_inicio | Date |
| hora_fin | Date |
| lugar_inicio | String |
| lugar_fin | String |
| precio | Number |
| completado | Boolean |
| comentario_pasajero | String |
| comentario_conductor | String |
| calificacion_pasajero | Number |
| calificacion_conductor | Number |
| kilometro_recorrido | Number |
> Nota: El tipo Date se debe enviar en el siguiente formato: YYYY-MM-DDTHH:mm:ss, ejemplo: 2021-10-10T10:00:00

> Nota: En los metodos PUT de las rutas estas esperan solo el valor que se  desea actualizar, no es necesario enviar todos los valores de la tabla

> Nota: En los metodos POST, PUT y DELETE de las rutas se debe tener encuenta que estas tablas estan relacionadas, por lo cual si se desea registrar un usuario conductor se debe registrar primero un usuario y un vehiculo, luego se debe registrar el usuario conductor con el id del usuario y el id del vehiculo, lo mismo para la tabla vehiculo, esta tabla requiere que se registre primero un usuario y luego se registre el vehiculo con el id del usuario.
>
> No se recomienda eliminar un registro de usuario o vehiculo si estos ya se encuentran relacionados, ya que esto puede generar errores en la plataforma.

## Roadmap
- [x] Crear el repositorio
- [x] Crear el diagrama de base de datos
- [x] Crear el archivo README.md con la documentacion del proyecto
- [x] Crear archivos de configuracion del proyecto
- [x] Crear el servidor
- [x] Crear ruta para obtener token de autenticacion
- [x] Crear CRUD para la tabla usuarios
- [x] Crear CRUD para la tabla vehiculos
- [x] Crear CRUD para la tabla usuarios-conductores
- [x] Crear CRUD para la tabla rutas
- [x] Crear CRUD para la tabla viajes
- [ ] Implementar ORM que facilite la manipulacion de la base de datos TypeORM o Sequelize - **En progreso**
- [ ] Corregir bugs en el codigo referente a las relaciones de las tablas - **En progreso**
- [ ] Implementar triggers en la base de datos para actualizacion automatica de los datos de las tablas - **En progreso**
- [x] Implementar autenticacion con JWT
- [ ] Implementar autenticacion con OAuth2
- [ ] Diseñar e implementar cliente visual para la plataforma
- [ ] Pruebas unitarias 


## Autor

- Kevin Gallardo - [@Kevin2606](https://github.com/Kevin2606)

