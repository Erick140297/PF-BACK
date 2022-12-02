# Documentación (Español)

## Contenido:

1. Configuración de **variables de entorno**
2. Comandos de **ejecución**
3. Uso de **Rutas** 
---
### 1. Configuración de **variables de entorno**

Es necesario crear un archivo llamado .env como se muestra en la imagen:

![ejemplo1](ejemplo1.png "ejemplo1")

El cual debe contener lo siguiente: 

```JavaScript
URL = "mongodb+srv://Erick:87SvnmsMkJagagKm@cluster0.g3htyhe.mongodb.net/?retryWrites=true&w=majority"
```

---
### 2. Comandos de **ejecución**

* Para iniciar el servidor en un entorno de desarrollo, ejecutar en consola: 

```
$ npm run dev
```

* Para iniciar el servidor en producción, ejecutar en consola: 

```
$ npm start
```

---

### 3. Uso de **Rutas** 

* POST /provider

Esta ruta es utilizada para guardar en la base de datos un usuario de tipo *provider*, es necesario mandar en el body un *name*, un *email* y un *service*. Se muestra un ejemplo a continuación: 

URL en un servidor local
```
http://localhost:3001/provider
```

Contenido del body

```JSON
{
  "name":"erick",
  "email":"erick@gmail.com",
  "service":"paseador de perros"
}
```

* GET /providers

La petición a esta ruta da como resultado un arreglo con los usuarios tipo *provider* almacenados en la base de datos.

URL en un servidor local
```
http://localhost:3001/providers
```
---