# Proyecto en Node

Proyecto básico insertando texto para imprimirlo.

## Requisitos

- **Node v20.18.0** (o el que sea necesario para tu proyecto).
- **Docker**: Para crear y ejecutar contenedores.

## Instalación

Para clonar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/BrieLy07/node.git

2. cd tu_repositorio
    ```bash
    cd mi_repositorio
3. Construye la imagen Docker
    ```bash
    docker build -t node .

4. Corre el contenedor
    ```bash
    docker run -p 3000:3000 node
