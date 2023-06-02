# JrBackendChallengue

## Estructura del proyecto

El proyecto se divide en dos carpetas principales:

- `alpha-flatten`: La primera parte del reto, desarrollado en JS.
- `quotes`: La segunda, hecha en TS.

## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- Git
- Docker
- Docker Compose
- Postman

## Configuración

Antes de ejecutar la aplicación, asegúrate de realizar la siguiente configuración:

1. En la carpeta `alpha-flatten` y `quotes`, modifica el archivo `.env` según sea necesario para configurar las variables de entorno del servidor backend.

## Descarga

1. Clona el repositorio
```bash
git clone https://github.com/luismoroco/JrBackendChallengue.git
```
2. Ingresa al directorio
```bash
cd JrBackendChallengue
```

## Ejecución

Sigue los pasos a continuación para ejecutar la aplicación:

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta el siguiente comando para iniciar los contenedores de Docker:

```bash
sudo make setup
```

4. Navega hasta el puerto web: 

Primero, agrega unos productos usando la UI en: 
[localhost:5173/products](http://localhost:5173/products)

Después puedes crear órdenes en:
[localhost:5173/orders](http://localhost:5173/orders)

5. Para terminar la ejecución, usa:
```bash
sudo make down
```