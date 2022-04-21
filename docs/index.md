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

3. [Instrucciones de Uso.](#id3)

4. [Dificultades.](#id4)

5. [Conclusión.](#id5)

6. [Referencias.](#id6)

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

### 2.1. Clase Note. <a name="id21"></a>

La clase `Note` es la encargada de definir una nota dentro del sistema.

Para especificar el color que puede tener una nota, definimos un objeto que solo puede contener un color de entre todos los que se pueden implementar.

```TypeScript
export type ColorNotes = 'Red' | 'Green' | 'Blue' | 'Yellow';
```
Para implementar la nota definimos la estructura básica que ha de tener,es decir, el titulo de la nota (*string*), el cuerpo de la nota (*string*) y el color de la nota (*ColorNote*).

Posteriormente se definen los métodos de acceso necesarios *Getters y Setter* para poder acceder o obtener los valores de estos atributos privados. Además de estos métodos tambien definimos por un lado **printTitle** que dependiendo del color de la nota que se introdujo a través de un string, muestra por consola a través de chark el titulo con el color que se introdujo. Por otro lado la función **printBody** realiza la misma idea pero con el cuerpo de la nota.

```TypeScript
import chalk from "chalk";

export class Note {

  constructor(private title: string, private body: string, private color: ColorNotes) {
    this.title = title;
    this.body = body;
    this.color = color;
  }

  geTitle(): string {
    return this.title;
  }

  getBody(): string {
    return this.body;
  }

  getColor(): ColorNotes {
    return this.color;
  }

  seTitle(newTitle: string): void {
    this.title = newTitle;
  }

  setBody(newBody: string): void {
    this.body = newBody;
  }

  setColor(newColor: ColorNotes): void {
    this.color = newColor;
  }

  printTitle(): void {
    switch (this.color) {
      case 'Red':
        console.log(chalk.red.bold(this.title));
        break;
      case 'Green':
        console.log(chalk.green.bold(this.title));
        break;
      case 'Blue':
        console.log(chalk.blue.bold(this.title));
        break;
      case 'Yellow':
        console.log(chalk.yellow.bold(this.title));
        break;
    }
  }
  printBody(): void {
    switch (this.color) {
      case 'Red':
        console.log(chalk.red(this.body));
        break;
      case 'Green':
        console.log(chalk.green(this.body));
        break;
      case 'Blue':
        console.log(chalk.blue(this.body));
        break;
      case 'Yellow':
        console.log(chalk.yellow(this.body));
        break;
    }
  }
};
```
Para realizar las pruebas unitarias desarrolladas en la metodologia TDD sobre esta clase `Note`, se define instancian los objetos de la clase nota y se comprueban los métodos de acceso *Getters y Setters*.

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/Basic_class/note';

const firstNote: Note = new Note('Primera Nota', 'Esta es la primera nota', 'Red');
const secondNote: Note = new Note('Segunda Nota', 'Esta es la segunda nota', 'Yellow');
const thirdNote: Note = new Note('Tercera Nota', 'Esta es la tercera nota', 'Green');
const fourthNote: Note = new Note('Cuarta Nota', 'Esta es la Cuarta nota', 'Blue');

describe('Pruebas Unitarias de la Clase Note', ()=> {
  it('Prueba de instancia de la clase Note', () =>{
    expect(firstNote).to.exist;
    expect(firstNote).not.null;
    expect(secondNote).to.exist;
    expect(secondNote).not.null;
    expect(thirdNote).to.exist;
    expect(thirdNote).not.null;
    expect(fourthNote).to.exist;
    expect(fourthNote).not.null;
  });
  it('Prueba de metodos de acceso "Getters" de la clase Note', () =>{
    expect(firstNote.geTitle()).to.be.eql('Primera Nota');
    expect(secondNote.geTitle()).to.be.eql('Segunda Nota');
    expect(thirdNote.geTitle()).to.be.eql('Tercera Nota');
    expect(fourthNote.geTitle()).to.be.eql('Cuarta Nota');

    expect(firstNote.getBody()).to.be.eql('Esta es la primera nota');
    expect(secondNote.getBody()).to.be.eql('Esta es la segunda nota');
    expect(thirdNote.getBody()).to.be.eql('Esta es la tercera nota');
    expect(fourthNote.getBody()).to.be.eql('Esta es la cuarta nota');

    expect(firstNote.getColor()).to.be.eql('Red');
    expect(secondNote.getColor()).to.be.eql('Yellow');
    expect(thirdNote.getColor()).to.be.eql('Green');
    expect(fourthNote.getColor()).to.be.eql('Blue');
  });

  it('Prueba de metodos de acceso "Setters" de la clase Note', () =>{
    firstNote.seTitle('Nota Actualizada');
    expect(firstNote.geTitle()).to.be.eql('Nota Actualizada');

    secondNote.setBody('Se ha actualizado el valor de la segunda nota');
    expect(firstNote.getBody()).to.be.eql('Se ha actualizado el valor de la segunda nota');

    fourthNote.setColor('Yellow');
    expect(firstNote.getColor()).to.be.eql('Yellow');
  });
});
```
<br/><br/>

### 2.2. Clase Bdd. <a name="id22"></a>

Esta es la clase encargada de definir a través de (lowDB)[] la base de datos que haŕa uso el sistema en los ficheros de la carpeta *src/database/*.

Para implementar esta clase de forma privada definimos la base de datos (*database*) y el nombre del fichero (*filename*) posteriormente en el constructor definimos el nombre del usuario en el sistema y un array de notas inicialmente vacio, que será el esquema que seguirá nuestra base de datos. En las siguientes líneas se lee los ficheros que hay dentro de la carpeta */src/database* y en caso de que no exista se crea un nuevo fichero con el nombre de usuario más la extensión "**.JSON**" y se guarda en el directorio este fichero inicializado. En caso de que se encuentre un fichero ya creado con ese nombre simplemente se inicializa en el fichero la información. Posteriormente analizamos si el usuario se encuentra en la base de datos , si no está dentro de la base de datos se llama a la función *addUser* que se encargará de añadir al usuario en caso de que si se encuentre el usuario en la base de datos introducimos en el vector de notas del usuario todas las notas y el id correspondiente.

El método **addUser** recibe el nombre del usuario por parametro y lo que hace es a través del método write para escribir en la base de datos crear un usuario con un nombre y un id aleatorio generado en la funcion getRandomArbitrary.

el método **getRandomArbitrary** recibe un valor minimo y uno maximo y entre ese rango genera un numero aleatorio y lo trunca para quedarse con el valor entero, que será más tarde asignado al ID del usuario.

el método **updateBbb** se encara de borrar todas las notas y la informacion actual de un usuario y añadir la nueva información de forma que se actualiza la base de datos para un usuario especifico.

```TypeScript
const low = require('lowdb');
const fs = require('fs');
import {spawn} from 'child_process';
const FileSync = require('lowdb/adapters/FileSync');
import {Note} from '../Basic_class/note';

export class Bdd {
  private dataBase: any;
  private fileName: string = '';

  constructor(userName: string, Notes: Note[] = []) {
    if (fs.readdirSync("./src/database").lenght === 0) {
      this.fileName = userName + ".json";
      // eslint-disable-next-line no-unused-vars
      const touch = spawn('touch', [this.fileName]);
      const adapter = new FileSync(`./src/database/${this.fileName}`);
      this.dataBase = low(adapter);
    } else {
      this.fileName = userName + ".json";
      const adapter = new FileSync(`./src/database/${this.fileName}`);
      this.dataBase = low(adapter);
    }

    if (!this.dataBase.get('User').find({name: userName}).value()) {
      this.addUser(userName);
    } else {
      const size: number = this.dataBase.get('User').find({name: userName}).get('notes').size().value();
      for (let i: number = 0; i < size; i++) {
        Notes.push(new Note(this.dataBase.get('User').find({name: userName}).get(`notes[${i}].title`).value(), this.dataBase.get('User').find({name: userName}).get(`notes[${i}].body`).value(), this.dataBase.get('User').find({name: userName}).get(`notes[${i}].color`).value()));
      }
    }
  }

  addUser(name: string) {
    this.dataBase.defaults({User: []}).write();
    this.dataBase.get('User').push({name: name, notes: [], id: this.getRandomArbitrary(100, 1)}). write();
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  updateDbb(userName: string, Notes: Note[]) {
    this.dataBase.get('User').find({name: userName}).get("notes").remove().write();
    Notes.forEach((item) => {
      this.dataBase.get('User').find({name: userName}).get('notes').push({title: item.geTitle(), body: item.getBody(), color: item.getColor()}).write();
    });
  }
}

```

<br/><br/>

### 2.3. Clase User. <a name="id23"></a>

Esta es la clase `User` encargado de definir a un usuario dentro de la base de datos y las diferentes operaciones que puede realizar el usuario.

Para implementar esta clase dentro del constructor inicializamos el nombre del usuario (*string*), un array de notas que serán todas las notas que tiene un usuario dentro de la base de datos (*Notes[]*), una instancia de la base de datos a los que se le pasa el nombre del usuario y las notas. de esta forma logramos una base de datos propia por cada usuario.

Dentro de los métodos tenemos por un lado los métodos encargados de actualizar un usuario **updateUser** y un método **exist** que comprueba si existe una nota dentro de la base de datos. Para ello declaramos un flag que comprueba si se ha encontrado una nota o no y para cada nota dentro del vector de notas si se encuentra el titulo con el titulo que se le pasa como parametro entonces guardamos la nota y ponemos el flag a true en caso negativo se muestra un mensaje por consola de que no se encuentra en el sistema.

Por otro lado, definimos los métodos que se encargarán de definir las posibles operaciones basicas que hará el usuario:
Para añadir el método **addnote** comrpueba que la nota existe si no existe la nota, es decir, es false la comprobacion entonces se crea una nueva nota con los parametros necesarios que se pasan al metodo el flag de creacion se pone a true y se muestra el mensaje en caso de que si exista la nota entonces se muestra un mensaje de que no se ha podido crear el objeto puesto que ya existe. Luego esta el método encargado de eliminar una nota **deleteNote** el cual recibe la nota a eliminar y comprueba a traves de exist que existe la nota en caso de existir se elimina a través de la funcion proporcionada por typescript splice sustituyendo el indice de esta nota por uno. 

Para la modificación se han llevado a cabo dos métodos: **modifyNote** que se encarga de recibir el titulo de la nota que se desea modificar y el nuevo cuerpo que se quiere introducir a la nota, entonces se busca la nota y se saca su indice y posteriormente establecemos con el setter adecuado el nuevo cuerpo a la nota. Por otro lado, también se puede modifica el color de la nota a través del método **modifyNoteColor** que recibe el titulo y el color nuevo a modificar entonces buscamos el titulo de la nota que se quiere modificar dentro de la base de datos y si se encuentra entonces se establece el nuevo color que se quiere actualizar con el setter adecuado.  

Para navegar dentro del sistema se hace uso del método **printTitles** que recorre las notas de un usuario especifico y va mostrando sus titulos listando todas las notas que tiene el usuario, otra forma de navegación es el método **printBody** que se encarga de recibir el titulo de una nota y buscarla a través de exist dentro de la base de datos del usuario y en caso de encontrar muestra el titulo y cuerpo de la nota. 

```TypeScript
import {Note, ColorNotes} from './note';
import {Bdd} from '../system/bdd';

const chalk = require('chalk');

export class User {

  constructor(private userName: string, private Notes: Note[]= [], private DataBase:Bdd = new Bdd(userName, Notes)) {
  }

  updateUser():void {
    this.DataBase.updateDbb(this.userName, this.Notes);
  }

  exist(title: string): [boolean, Note] {
    let found: boolean = false;
    let foundNote:Note = new Note('-', '-', 'Red');
    this.Notes.forEach((item) => {
      if (item.geTitle() === title) {
        found = true;
        foundNote = item;
      }else {
        found = false;
        console.log(chalk.red.bold.inverse('No existe el nombre'));
      }
    });
    return [found, foundNote];
  }

  addNote(title: string, body: string, Color: ColorNotes): boolean {
    let finish: boolean = false;
    const check: [boolean, Note] = this.exist(title);
    if (!check[0]) {
      this.Notes.push(new Note(title, body, Color));
      finish = true;
      console.log(chalk.green.bold.inverse('Se ha añadido la nueva nota'));
    } else {
      console.log(chalk.red.bold.inverse('Ya existe una nota igual'));
    }
    return finish;
  }

  modifyNote(title: string, bodyToModify: string): boolean {
    let finish: boolean = false;
    const check: [boolean, Note] = this.exist(title);
    if (check[0]) {
      const index = this.Notes.indexOf(check[1]);
      this.Notes[index].setBody(bodyToModify);
      finish = true;
      console.log(chalk.green.bold.inverse('Se ha modificado el cuerpo de la nota'));
    } else {
      console.log(chalk.red.bold.inverse('No existe la nota a modificar'));
    }
    return finish;
  }

  modifyNoteColor(title: string, colorToModify: ColorNotes): boolean {
    let finish: boolean = false;
    const check: [boolean, Note] = this.exist(title);
    if (check[0]) {
      const index = this.Notes.indexOf(check[1]);
      this.Notes[index].setColor(colorToModify);
      finish = true;
      console.log(chalk.green.bold.inverse('Se ha modificado el color de la nota'));
    } else {
      console.log(chalk.red.bold.inverse('No existe la nota a modificar'));
    }
    return finish;
  }

  deleteNote(title: string): boolean {
    let finish: boolean = false;
    const check: [boolean, Note] = this.exist(title);
    if (check[0]) {
      const index = this.Notes.indexOf(check[1]);
      if (index > -1) {
        this.Notes.splice(index, 1);
        finish = true;
        console.log(chalk.green.bold.inverse(`Se ha eliminado la nota con titulo ${title}`));
      }
    } else {
      console.log(chalk.red.bold.inverse('Ha introducido mal el titulo o no existe la nota con ese titulo'));
    }
    return finish;
  }

  printTitles(): void {
    console.log(">> Notas de " + this.userName + ":");
    this.Notes.forEach((item) => {
      item.printTitle();
    });
  }

  printNotes(title : string): void {
    const check: [boolean, Note] = this.exist(title);
    if (check[0]) {
      console.log(`────────────────────────────────`);
      check[1].printTitle();
      check[1].printBody();
      console.log(`────────────────────────────────`);
    } else {
      console.log(chalk.red.bold.inverse('Ha introducido mal el titulo o no existe la nota con ese titulo'));
    }
  }
}

```
Para las pruebas unitarias de esta clase lo que se hace es declarar tres usuarios diferentes y comprobar sus instancias, posteriormente comprobamos las operaciones basicas añadir, eliminar, modificar y navegar del sistema a través de los métodos explicados anteriormente.

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {User} from '../src/Basic_class/user';

describe('Pruebas Unitarias de la clase User', () => {
  const usuario1: User = new User("Joel");
  const usuario2: User = new User("Manolo");
  const usuario3: User = new User("Pepito");

  it("Test de instancia de la clase User", () => {
    expect(usuario1).exist;
    expect(usuario1).not.null;
    expect(usuario2).exist;
    expect(usuario2).not.null;
    expect(usuario3).exist;
    expect(usuario3).not.null;
  });

  it("Test de añadir una nota a un usuario", () => {
    expect(usuario1.addNote('Nota Joel', 'Esta es la nota de las tareas de Joel', 'Red')).to.be.eql(true);
    expect(usuario1.addNote('Nota Joel numero 2', 'Esta es la segunda nota de Joel', 'Green')).to.be.eql(true);
    expect(usuario2.addNote('Nota Manolo', 'Esta es la nota de las tareas de Manolo', 'Blue')).to.be.eql(true);
    expect(usuario2.addNote('Nota Manolo numero 2', 'Esta es la segunda nota de Manolo', 'Red')).to.be.eql(true);
    expect(usuario3.addNote('Nota Pepito', 'Esta es la nota de las tareas de Pepito', 'Yellow')).to.be.eql(true);
    expect(usuario3.addNote('Nota Pepito numero 2', 'Esta es la segunda nota de Pepito', 'Yellow')).to.be.eql(true);
  });

  it("Test que añade una nota ya existente", () => {
    expect(usuario1.addNote('Nota Joel', 'Esta es la nota de las tareas de Joel', 'Red')).to.be.eql(false);
    expect(usuario2.addNote('Nota Manolo', 'Esta es la nota de las tareas de Manolo', 'Blue')).to.be.eql(false);
    expect(usuario3.addNote('Nota Pepito', 'Esta es la nota de las tareas de Pepito', 'Yellow')).to.be.eql(false);
  });

  it("Test de eliminar una nota de un usuario", () => {
    expect(usuario1.deleteNote('Nota Joel numero 2')).to.be.eql(true);
    expect(usuario2.deleteNote('Nota Manolo numero 2')).to.be.eql(true);
    expect(usuario3.deleteNote('Nota Pepito numero 2')).to.be.eql(true);
  });

  it("Test de modificacion del cuerpo de las notas de diferentes usuarios", () => {
    expect(usuario1.modifyNote("Nota Joel", "Ahora esta nota ha sido modificada")).to.eql(true);
    expect(usuario2.modifyNote("Nota Manolo", "Cuerpo de la nota de manolo nuevo")).to.eql(true);
    expect(usuario3.modifyNote("Nota Pepito", "El cuerpo será nuevo tambien en la nota de pepito")).to.eql(true);
  });
});
```
<br/><br/>

### 2.4. Fichero index.ts. <a name="id24"></a>

En este fichero se especifican dos funciones, la función main que implementa el funcionamiento principal del sistema y la función colorGetter el cual es usado dentro de la funcion principal para gestionar los colores de chark.

* `Función Main`:

En esta función implementa diversos **yargs** para hacer uso de este módulo proporcionado debemos seguir la estructura utilizada. Primero especificamos el nombre del comando que se debe introducir ademñas hacemos que se solicite un valor de tipo string a travś de la opcion *demandOption* y de este forma dentro de un array de yargs.command se solicitan los diversos elementos necesarios para realizar una opción. Una vez introducido a través de la sentencia*handler(argv)* realizamos la acción oportuna, en caso del comando de añadir, se comprueba de que todos los valores introducidos sean de tipo string, es decir, cadenas de caracteres y se crea un nuevo usuario con el nombre especificado por linea de comando, tambien un nuevo color a través de la funcion colorGetter  y en caso de que al añadir una nueva nota para ese usuario el flag sea true (que no haya habido problemas) entonces actualizamos la base de datos a través de la función adecuada. De esta forma operamos para los diferentes comandos de las diferentes operaciones.

En el caso de eliminar, se recoge por linea de comando el usuario y el titulo y si los tipos de los valores pasados son los correctos entonces si se ha eliminado a través del método **deleteNote** y no ha dado problemas se actualiza la base de datos. De esta forma también se implementa modificar el cuerpo, modificar el color, listar todas las notas de un usuario y leer la nota de un usuario.


```TypeScript
import * as yargs from 'yargs';
import {ColorNotes} from './Basic_class/note';
import {User} from './Basic_class/user';

function main(): void {

  yargs.command({
    command: 'add',
    describe: 'Añadir una nueva nota al sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Cuerpo',
        demandOption: true,
        type: 'string',
      },
      color: {
        describe: 'Color',
        demandOption: true,
        type: 'string',
      },

    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
        const usuario: User = new User(argv.user);
        const color: ColorNotes = colorGetter(argv.color);
        if (usuario.addNote(argv.title, argv.body, color)) {
          usuario.updateUser();
        }
      }
    },
  });

  yargs.command({
    command: 'modify',
    describe: 'Modificar del cuerpo de nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Cuerpo',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string') {
        const usuario: User = new User(argv.user);

        if (usuario.modifyNote(argv.title, argv.body)) {
          usuario.updateUser();
        }
      }
    },
  });

  yargs.command({
    command: 'delete',
    describe: 'Elimina una nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string') {
        const usuario: User = new User(argv.user);
        if (usuario.deleteNote(argv.title)) {
          usuario.updateUser();
        }
      }
    },
  });

  yargs.command({
    command: 'changeColor',
    describe: 'cambiar el color de una nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
      color: {
        describe: 'Color',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.color === 'string') {
        const usuario: User = new User(argv.user);
        const color: ColorNotes = colorGetter(argv.color);
        if (usuario.modifyNoteColor(argv.title, color)) {
          usuario.updateUser();
        }
      }
    },
  });

  yargs.command({
    command: 'read',
    describe: 'Lee una nota del sistema',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'Titulo',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string' && typeof argv.title === 'string') {
        const usuario: User = new User(argv.user);
        usuario.printNotes(argv.title);
      }
    },
  });

  yargs.command({
    command: 'list',
    describe: 'Lista las notas del usuario',
    builder: {
      user: {
        describe: 'Usuario',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.user === 'string') {
        const usuario: User = new User(argv.user);
        usuario.printTitles();
      }
    },
  });

  yargs.parse();
}

```

* `Funcion ColorGetter`:

Esta función es utilizada para transformar el string que se pasa a través de linea de comando que define el color del usuario a un color válido recogido en el sistema, esto es que sea de tipo "string" a tipo "ColorNote". Para ello pasamos el color en tipo string y analizamos el string en caso de ser uno de los cuatro colores recogidos en el sistema se declara una variable que sera la que alamacenara el cambio y en caso de ser por ejemplo blue se le asocia el color azul y posteriormente se devuelve. de esta forma logramos realizar el paso de color.

```TypeScript

function colorGetter(colorName: string): ColorNotes {
  let formatColor: ColorNotes = "Green";
  switch (colorName) {
    case "Blue":
      formatColor = "Blue";
      break;
    case "Red":
      formatColor = "Red";
      break;
    case "Yellow":
      formatColor = "Yellow";
      break;
    case "Green":
      formatColor = "Green";
      break;
    default:
      console.log("Color no valido, asigado Verde como predeterminado");
      break;
  }
  return formatColor;
}

```

<br/><br/>

## 3. Instrucciones de Uso. <a name="id3"></a>
Para la ejecución del programa previamente se debe compilar a través del comando `tsc` que generará la carpeta *dist* correspondiente. Posteriormente debemos ejecutar en la linea de comando alguno de los siguiente comandos:

La forma de ejecución del mismo es: `node dist/index.js [action] --[parametros]
Dentro de las acciones recogidas que se debe colocar solo una en [action] están:

* `add`: Para añadir una nueva nota => esto implica que los parametros que se debe poner son: `--user="nombre"  --title="titulo" --body="informacion" --color="(Red| Green | Blue | Yellow)"` que serían los colores disponibles.
  * ejemplo: node dist/index.js add --user"Joel" --title="titulo" --body="este es el cuerpo" --color="Red"

* `delete`: Para eliminar una nota existente => los parametros que se debe poner son: `--user="nombre"  --title="titulo de la nota a eliminar"`.
  * ejemplo: node dist/index.js delete --user"Joel" --title="titulo"

* `modify`: Para modificar el cuerpo de una nota existente => los parametros que se deben de poner son : `--user="nombre" --title="titulo de la nota a modificar" --body="Nuevo cuerpo que se desea introducir" `.
  * ejemplo: node dist/index.js modify --user"Joel" --title="titulo" --body="este es el nuevo cuerpo modificado"

* `changeColor`: Para modificar el color de una nota existente => los parametros que se deben de poner son : `--user="nombre" --title="titulo de la nota a modificar" --color="Nuevo color que se desea cambiar y debe de estar dentro del sistema" `.
  * ejemplo: node dist/index.js changeColor --user"Joel" --title="titulo" --color="Green"

* `list`: Para listar todas las notas de un usuario especifico => los parametros que se deben de poner son : `--user="nombre del usuario que se quiere listar" `.
  * ejemplo: node dist/index.js list --user"Joel"

* `read`: Para leer una nota en concreto de un usuario especifico => los parametros que se deben de poner son : `--user="nombre" --title="titulo de la nota que se desea leer" `.
  * ejemplo: node dist/index.js read --user"Joel" --title="titulo".

## 4. Dificultades. <a name="id4"></a>

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

* Otro error que se ha encontrado es con la calidad del codigo a través de Sonar-Cloud.

## 5. Conclusión. <a name="id5"></a>

Los objetivos que se han propuesto y se han cumplido son:

* Que la aplicación permita que varios usuarios interactuen con ella pero no simultaneamente.
* La nota esta formada por titulo, cuerpo y color.
* cada usuario tendrá su propia lista de notas
* cada usuario podrá añadir, eliminar, modificar, listar o leer cualquier nota dentro de sus lista de nota.
* Todos los mensajes informativos se deben mostrar de color verde excepto los de error que se deberan mostrar de color rojo
* los cambios que se realizen deberán ser persistentes es decir que no se borren.
* un usuario solo puede interactuar con la aplicacion a través de linea de comando.

De esta forma se ha realizado todos estos objetivos a través del uso de clases, y de diversos modulos que aportan funcionalidad como lowdb, chark y yargs.

## 6. Referencias. <a name="id6"></a>
1. [Github](http://github.com)
2. [Repositorio de la Pŕactica](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101130408.git)
3. [Guión de la Pŕactica 9](https://ull-esit-inf-dsi-2122.github.io/prct09-filesystem-notes-app/)
4. [Documentación GitHub Actions](https://docs.github.com/en/actions)
5. [Documentación Istanbul](https://istanbul.js.org/)
6. [Documentación Coveralls](https://coveralls.io/)
7. [Documentación de TypeDoc.](https://typedoc.org/)
8. [Documentación de Mocha.](https://mochajs.org/)
9. [Documentación de Chai.](https://www.chaijs.com/)
10. [Documentacion sobre el modulo LowDB](https://www.npmjs.com/package/lowdb)
11. [Documentacion sobre el modulo Yargs](https://www.npmjs.com/package/yargs)
12. [Documentacion sobre el modulo Chark](https://www.npmjs.com/package/chalk)
13. [Documentacion sobre el uso de filesystem de node.js](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#synchronous-api)
14. [Documentacion de child process](https://nodejs.org/api/child_process.html)
15. [Documentacion de la libreria Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
16. [Documentacion sobre el uso de fylesync](https://www.geeksforgeeks.org/node-js-fs-readdirsync-method/)
