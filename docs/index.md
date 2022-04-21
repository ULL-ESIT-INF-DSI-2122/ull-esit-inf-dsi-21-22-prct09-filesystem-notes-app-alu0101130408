# Práctica 9 - Aplicación de procesamiento de notas de texto.
# Desarrollo de Sistemas Informáticos
# Universidad de la Laguna

### Autor:  
  * Joel Francisco Escobar Socas - alu0101130408@ull.edu.es


### Índice:

1. [Introducción y objetivos.](#id1)

2. [Desarrollo.](#id2)
      
  2.1. [Clase Note.](#id21)
  2.2. [Clase BDD.](#id22)
  2.3. [Clase User.](#id23)
  2.4. [fichero index.ts.](#id24)

3. [Dificultades.](#id3)

4. [Conclusión.](#id4)

5. [Referencias.](#id5)

<br/><br/>

## 1. Introducción y objetivos. <a name="id1"></a>

El Objetivo de esta práctica es diseñar e implementar un sistema que permita añadir, eliminar, modificar, listar y leer a través de linea de comando las notas de un usuario especifico almacenadas enn un fichero. En resumen, debemos hacer uso de los módulos `chark` y `yargs` para diseñar e implementar una aplicación de procesamiento de notas de texto. 

Como se ha mencionado se debera hacer uso de dos módulos a demás de los módulos necesarios que ya se han visto. Los módulos utilizados en este proyecto por mi parte han sido:
* **LowDB**: Para llevar a cabo la implementación de una base de datos en un fichero *.JSON* que almacene las notas del usuario.
* **Chalk**: Para manejar la visualización con diferentes estilos, formatos y colores la ejecucion de nuestro código.
* **Yarg** : Para obtener y trabajar con los datos que se pasan a través de la línea de comando.

<br/><br/>

## 2. Desarrollo. <a name="id2"></a>

La estructura que se ha adoptado en este proyecto es la siguiente:

* **Basic_class/** : Directorio donde se definen los ficheros que implementan las clases básicas del sistema, dentro encontramos:
  * *note.ts*: Clase que implementa la estructura de una nota dentro del sistema (Título, Cuerpo y Color).
  * *user.ts*: Clase que implementa a un usuario en la base de datos y las operaciones que puede realizar (Añadir, eliminar, modificar, listar y leer).

* **database/**: Directorio donde se almacenarán los ficheros `.JSON` que implementa la base de datos.

*  **system/**: Directorio donde se encuentra las clases que implementan la base de datos.
  * *bdd.ts*: Clase encargada de crear la base de datos y añadir y actualizar la misma.

* **index.ts**: Fichero donde se define la función principal que lee desde línea de comando a través de yarg y dependiendo de los valores que se pasen realiza una operación u otra.

A continuación vamos a explicar de forma más detallada estos ficheros que compone el proyecto:

### 2.1. Clase Genero. <a name="id21"></a>

Info general

objeto colorNotes

```TypeScript

```

clase Note
```TypeScript
```
Test

```TypeScript

```
<br/><br/>

### 2.2. Clase Bdd. <a name="id22"></a>

Info general

objeto colorNotes

```TypeScript

```

clase Note
```TypeScript
```
Test

```TypeScript

```
<br/><br/>

### 2.3. Clase User. <a name="id23"></a>

Info general

objeto colorNotes

```TypeScript

```

clase Note
```TypeScript
```
Test

```TypeScript

```
<br/><br/>

### 2.4. Fichero index.ts. <a name="id24"></a>

Info general

objeto colorNotes

```TypeScript

```

clase Note
```TypeScript
```
Test

```TypeScript

```
<br/><br/>

## 3. Dificultades. <a name="id3"></a>

Dentro de las dificultades encontradas dentro de esta práctica, me gustaría resaltar:

* El fallo de la versión instalada que aparece en la documentacion de chalk y yard haciendo que saltará el siguiente error, puesto que la versión no es compatible con TypeScript. Cosa que posteriormente se soluciono gracias al mensaje del profesorado.
```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/tests/notes.spec.ts
    at new NodeError (node:internal/errors:371:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:84:11)
    at defaultGetFormat (node:internal/modules/esm/get_format:99:38)
    at defaultLoad (node:internal/modules/esm/load:21:14)
    at ESMLoader.load (node:internal/modules/esm/loader:359:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:280:58)
    at new ModuleJob (node:internal/modules/esm/module_job:66:26)
    at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:297:17)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:261:34)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:337:24)
    at async importModuleDynamicallyWrapper (node:internal/vm/module:437:15)
    at async formattedImport (/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/node_modules/mocha/lib/nodejs/esm-utils.js:7:14)
    at async Object.exports.requireOrImport (/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/node_modules/mocha/lib/nodejs/esm-utils.js:48:32)
    at async Object.exports.loadFilesAsync (/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/node_modules/mocha/lib/nodejs/esm-utils.js:103:20)
    at async singleRun (/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/node_modules/mocha/lib/cli/run-helpers.js:125:3)
    at async Object.exports.handler (/home/usuario/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408/node_modules/mocha/lib/cli/run.js:374:5)
```
## 4. Conclusión. <a name="id4"></a>

Los objetivos que se han propuesto y se han cumplido son:
* 
* 

## 5. Referencias. <a name="id5"></a>
1. [Github](http://github.com)
2. [Repositorio de la Pŕactica](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo-m.git)
3. [Guión de la Pŕactica 7](https://ull-esit-inf-dsi-2122.github.io/prct07-music-dataModel/)
4. [Documentación GitHub Actions](https://docs.github.com/en/actions)
5. [Documentación Istanbul](https://istanbul.js.org/)
6. [Documentación Coveralls](https://coveralls.io/)
7. [Documentación de TypeDoc.](https://typedoc.org/)
8. [Documentación de Mocha.](https://mochajs.org/)
9. [Documentación de Chai.](https://www.chaijs.com/)
10. [Documentacion sobre el modulo Inquirer](https://www.npmjs.com/package/inquirer)
11. [Documentacion sobre el modulo LowDB](https://www.npmjs.com/package/lowdb)