# Markdown Links

## Diagrama de Flujo

![Flow Chart](https://user-images.githubusercontent.com/45085970/54211481-666e9700-44af-11e9-8218-9157bc9fe06c.jpg)

## Pseudocódigo
#####Función isAbsolute()
**Valor de entrada:** Se ingresa un string: una ruta relativa "./some/example.md" o absoluta "C:\Users\User\Desktop\markdown\LIM008-fe-md-links".
**Proceso:** Se pregunta si es una ruta absoluta o relativa mediante el método path.isAbsolute().
**Valor de salida:** Se recibe un booleano: True si es una ruta absoluta, False si es una ruta relativa.
#####Función convertToAbsolute() 
**Valor de entrada:** Se ingresa un string: una ruta relativa "./some/example.md".
**Proceso:** Se convierte la ruta relativa a una ruta absoluta a través del método path.resolve().
**Valor de salida:** Se recibe un string: una ruta absoluta "C:\Users\User\Desktop\markdown\LIM008-fe-md-links".
#####Función isDirectorySync()
**Valor de entrada:** Se ingresa un string: una ruta absoluta.
**Proceso:** Se pregunta si es un directorio mediante el método fs.statSync.isDirectory();
**Valor de salida:** Se recibe un booleano: True si es un directorio, False si no es un directorio.
#####Función readDirectorySync()
**Valor de entrada:** Se ingresa un string: una ruta absoluta "C:\Users\User\Desktop\markdown\LIM008-fe-md-links".
**Proceso:** Se leen los directorios hasta que se encuentren un archivo de extension .md a través del método readdirSync.
**Valor de salida:** Se recibe un array con todas las rutas de los archivos de extensión .md encontrados en la ruta.
#####Función isFileSync()
**Valor de entrada:** Se ingresa un string: una ruta absoluta.
**Proceso:**  Se pregunta si es un archivo mediante el método fs.statSync.isFile();
**Valor de salida:** Se recibe un booleano: True si es un archivo, False si no es un archivo.
#####Función readFileSync()
**Valor de entrada:** Se ingresa un string: una ruta de un archivo .md
**Proceso:**Se lee el contenido de la ruta de archivo ingresada y se convierte a string a través del método fs.readFileSync.
**Valor de salida:** Un string: el contenido del archivo.
#####Función getLinks()
**Valor de entrada:** Un array de rutas de archivos .md
**Proceso:** Se recorre cada ruta y se extrae los links a traves de la librería marked y accediendo a su propiedad link, y se recorta el texto del link a 50 caracteres como máximo.
**Valor de salida:** Se recibe un array de objetos donde cada objeto es un link con sus propiedades href, text y file.
#####Función validLinks()
**Valor de entrada:**Se ingresa un array de objetos.
**Proceso:**Se recorre el array y se valida el status y el statusText a través de la librería node-fetch
**Valor de salida:** Se recibe un array de objetos al cual se le agregó las propiedades status y statusText a cada elemento.
#####Función Stats()
**Valor de entrada:** Se ingresa un array de objetos
**Proceso:** Se recorre el array de objetos y a través del método reduce se obtien los links, únicos y rotos y a través de .length se obtien el total de links.
**Valor de salida:** Se obtiene valores tipo number: Total, Únicos y Rotos.

## Product Backlog
#####Historia 1
Yo como desarrollador quiero poder descargar el modulo a través de un ejecutable en terminal, porque es mas rápido y directo, y que sea instable desde Github.
#####Historia 2
Yo como desarrolladora quiero importar el modulo con 'require' para usarlo programaticamente porque lo necesito para realizar mi proyecto.
#####Historia 3
Yo como desarrolladora quiero que en terminal se muestren los links encontrados en el/los archivos .md que se indico en la ruta con la URL encontrada, el texto dentro del link y la ruta donde se encontró el archivo, porque necesito esos datos para mi proyecto.
#####Historia 4
Yo como desarrollador quiero averiguar si el link funciona o no y que se muestre si lo hace o no en consola porque quiero saber que links fallan.
#####Historia 5
Yo como desarrolladora desea saber el numero de links unicos y totales, para tener una idea clara de la cantidad que son
#####Historia 6
Yo como desarrollador quiero saber el numero de links únicos, totales y rotos porque quiero modificar los archivos .md.

## Documentación técnica
La función de esta librería es obtner los links que se encuentren en el o los archivos markdown que se encontraron en la ruta que se encontró, así también tener la opción de saber el status de cada link y visualizar estadísticas como el total de links, cuantos de estos links son únicos y cuantos estan rotos, es decir son inválidos.

## Instalación
```sh
$ npm install kimberlyrora/md-links
```

### JavaScript API

El módulo puede importarse en otros scripts de Node.js:

```js
const mdLinks = require("md-links");
// Para obtener un array con los links a través de una ruta de archivo
mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
// Para obtener un array con los links con las propiedades status y statusText agregadas
mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);
// Para obtener un array con los links a través de una ruta de directorio
mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)
1. Se obtiene los links a través de un ruta relativa o absoluta. 
```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```
##### `--validate`
2. Se obtiene los links y su validación a través de un ruta relativa o absoluta. 
```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```
##### `--stats`
3. Se obtiene el cálculo de los links únicos y totales
```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```
##### `--validate` `--stats` 
4. Se obtiene el cálculo de los links únicos, rotos y totales.
```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
