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

Alpha y Flatten: 
[localhost:5001](http://localhost:5001)

Quote y Quotes
[localhost:5000](http://localhost:5000)

5. Para terminar la ejecución, usa:
```bash
sudo make down
```

## Funcionamiento

1. /alpha 

input
```bash
{
    "fruit": "apple",
    "animal": "zebra",
    "city_list": [
        "sunnyvale",
        "sanjose"
    ]
}
```

output
```bash
{
    "animal": "zebra",
    "city_list": [
        "sunnyvale",
        "sanjose"
    ],
    "fruit": "apple",
    "_id": "6479f0a637a00f598cc8b065",
    "__v": 0
}
```

2. /flatten
input
```bash
{
    "fruit": "apple",
    "animal": "zebra",
    "city_list": [
        "sunnyvale",
        "sanjose"
    ]
}
```
output
```bash
{
    "fruit": "apple",
    "animal": "zebra",
    "city_list": "sunnyvale,sanjose",
    "_id": "6479f18c37a00f598cc8b067",
    "__v": 0
}
```

3. /quote (RANDOM) ACCESO - LIBRE (SIN LOGIN NI TOKEN)
output
```bash
[
    {
        "quotes_row_selectrandom": [
            {
                "id": 4,
                "quote": "Simplicity is prerequisite for reliability.",
                "created_at": "2023-06-02",
                "autor_id": 2
            }
        ]
    }
]
```

4. /quotes


LOGIN
```bash
{
    "username": "root",
    "password": "makanaki"
}
```

RETURN A TOKEN 
```bash
"auth-token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6Ik1BTkFHRVIiLCJpYXQiOjE2ODU3MTE5NDEsImV4cCI6MTY4NTc5ODM0MX0.y0-1Gf6natiCm8ILiY_A6D93WCEcuAz7zBifdrcDrpM
```

SE USA COMO ENCABEZADO al ingresar a /quotes (SOLO ADMINS)
output
```bash
{
    "autors": [
        {
            "id": 2,
            "name": "Edsger Dijkstra",
            "quotes": [
                {
                    "id": 4,
                    "quote": "Simplicity is prerequisite for reliability.",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 2
                },
                {
                    "id": 5,
                    "quote": "Program testing can be used to show the presence of bugs, but never to show their absence!",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 2
                },
                {
                    "id": 6,
                    "quote": "Perfecting oneself is as much unlearning as it is learning.",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 2
                }
            ]
        },
        {
            "id": 3,
            "name": "Friedrich Nietzsche",
            "quotes": [
                {
                    "id": 7,
                    "quote": "The true man wants two things: danger and play.",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 3
                },
                {
                    "id": 8,
                    "quote": "Be careful, lest in casting out your demon you exorcise the best thing in you.",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 3
                },
                {
                    "id": 9,
                    "quote": "The secret for harvesting from existence the greatest fruitfulness and the greatest enjoyment is: to live dangerously!",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 3
                }
            ]
        },
        {
            "id": 1,
            "name": "Joanne Rowling",
            "quotes": [
                {
                    "id": 1,
                    "quote": "If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 1
                },
                {
                    "id": 2,
                    "quote": "The internet has been a boon and a curse for teenagers.",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 1
                },
                {
                    "id": 3,
                    "quote": "It is our choices... that show what we truly are, far more than our abilities.",
                    "created_at": "2023-06-02T00:00:00.000Z",
                    "autor_id": 1
                }
            ]
        }
    ]
}
```
