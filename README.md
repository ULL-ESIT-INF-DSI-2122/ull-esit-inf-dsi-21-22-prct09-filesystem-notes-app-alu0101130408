# Práctica 9: Aplicación de procesamiento de notas de texto
## Autor: Joel Francisco Escobar Socas & Micaela Lucia Mungay Juncal
## Asignatura: Desarrollo de Sistemas Informáticos.
## Centro: Universidad de la Laguna.
### 2021/2022


## Introducción:

El Objetivo de esta práctica es diseñar e implementar un sistema que permita añadir, eliminar, modificar, listar y leer a través de linea de comando las notas de un usuario especifico almacenadas enn un fichero. En resumen, debemos hacer uso de los módulos `chark` y `yargs` para diseñar e implementar una aplicación de procesamiento de notas de texto. 

Especificamente la forma de ejecución del mismo es: `node dist/index.js [action] --[parametros]
Dentro de las acciones recogidas que se debe colocar solo una en [action] están:

* `add`: Para añadir una nueva nota => esto implica que los parametros que se debe poner son: `--user="name"  --title="titulo" --body="informacion" --color="(Red| Green | Blue | Yellow)"` que serían los colores disponibles.

* `delete`: Para eliminar una nota existente => los parametros que se debe poner son: `--user="name"  --title="titulo de la nota a elimianr"`.

> Para acceder al informe de la práctica 9 piche [aquí]()

> Para acceder al informe a través de Github Pages, pinche [aquí]() u acceda al siguiente enlace:
> 
> Si desea acceder a la documentación de Typedoc puede acceder a través de la extensión Live Server.

> [Guión de la Práctica 9](https://ull-esit-inf-dsi-2122.github.io/prct09-filesystem-notes-app/) 


[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/actions/workflows/node.js.yml)
<space><space>
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408?branch=main)
<space><space>
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408)
<space><space>
---
ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408

ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408 created by GitHub Classroom
---
