# Informe Práctica 6: Clases e Interfaces Genéricas


![Image](https://i.imgur.com/NQO0Icb.jpg)



╔═══════════════════════════════════════════════════════════════════╗

> - Autora: Andrea Calero Caro > [alu0101202952@ull.edu.es](alu0101202952@ull.edu.es)
> - Práctica 6: Clases e Interfaces Genéricas
> - Asignatura: Desarrollo de Sistemas Informáticos
> - Universidad de La Laguna

╚═══════════════════════════════════════════════════════════════════╝



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## Índice


  - Objetivos
  - Paso previo: Aceptación de tarea de GitHub Classroom
  - Estructura básica de proyectos
  - Instalación, configuración Typedoc
  - Instalación, configuración Mocha y Chai
  - Instalación, configuración Coverage, Instanbul, Coveralls
  - Pruebas Unitarias estructura
  - Ejercicios en TypeScript 
    - Ejercicio 1
    -   Prueba Unitaria
    -   Desarrollo del código
    - Ejercicio 2
    -   Prueba Unitaria
    -   Desarrollo del código
    - Ejercicio 3
    -   Prueba Unitaria
    -   Desarrollo del código
  - Desarrollo del informe con GitHub Pages
  - Conclusiones
  - Bibliografía y/o Webgrafía
  
  



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## OBJETIVOS


Los objetivos en esta práctica será que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript. Para ello empleando los conocimientos además, que ya tenemos, en typedoc, y la realización de las pruebas unitarias siguiendo los pasos de TDD, es decir, realizar pruebas y expectativas, ver su fallo y corregir el código y volver con la prueba y sus expectativas para que den acierto. Para ello tendremos que usar Mocha y Chai.

- **ENLACE A LA DOCUMENTACIÓN EN TYPEDOC**
> - [Informe documentación con Typedoc](http://127.0.0.1:5500/p3_Ejercicios_datos_funciones/docs/index.html)



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PASO PREVIO: ACEPTACIÓN DE TAREA DE GITHUB CLASSROOM


Antes de comenzar se nos requiere que aceptemos la tarea asignada en el GitHub Classroom:

![Asignación GitHub Classroom](https://i.imgur.com/7sAZe2x.jpg)

Con ello ya podríamos trabajar en esta práctica.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA BÁSICA DE PROYECTOS


Lo primero sería estructurar el workspace de nuestra práctica siguiendo algunos pasos indicados en:

> - [Estrutura](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html)

Comenzamos creando la estructura básica, primero creando el directorio donde se alojará el repositorio clonado, tal que:

![Clonar repositorio](https://i.imgur.com/wGvqmj6.jpg)

Comenzamos modificando el **package.json** con el comando `npm init --yes` y creamos de forma automática el fichero de configuración **tsconfig.json** eso lo haremos con el comando `tsc --init` y se crearía el tsconfig.json por defecto, nosotros lo modificaremos algo más para poder trabajar correctamente, necesitaremos poner la opción **exclude []** dentro del tsconfig.json para indicarle al compilador los directorios que exluiría a la hora de compilar explícitamente quedando:

![tsconfig.json](https://i.imgur.com/cMYGzU1.jpg)

Esos 3 directorios los exluiríamos a la hora de hacer `npm start` y no fallar a la hora de compilar los tests o los node-modules.

Para ello creo el directorio donde empezaremos a estructurar los directorios y ejercicios, además de configurar el **package.json**, quedando el package.json tal que:

![package.json](https://i.imgur.com/8E7sYOj.jpg)

También necesitamos crear a partir de este el **tsconfig.json** con la ruta de localización de los ejercicios.ts, en el directorio `./src` y sus ejecutables .js en el directorio `./dist`, como hemos hecho en otras prácticas:

Manualmente, se crearía ambos directorios donde trabajaremos. 

También necesitaremos una compilación con control automático de cambios que instalaremos con el comando `npm install --save-dev tsc-watch`, tal que:

![Compilacion control de cambios automáticos](https://i.imgur.com/TfNDhqN.jpg)

Por último en la organización de la estructura básica será la instalación del paquete **EsLint**, esto por si quisiéramos comprobar la sintaxis de nuestro código, encontrar y solucionar problemas en el mismo. Primero lo instalamos con el comando:

> `npm install -g eslint` 

Y lo inicializamos con `eslint --init` añadiéndole esto valores:

![Configuración Eslint](https://i.imgur.com/roVpYH9.jpg)

Luego modificar el fichero .eslint que se crea con las reglas correspondientes, quedando:

![Esdlint configuracion fichero](https://i.imgur.com/pvViLkf.jpg)

Quedando la primera estructura básica de esta práctica del modo: 

![Estructura básica](https://i.imgur.com/tJ7j521.jpg)

Tras la estructura básica nos dedicaremos a trabajar en el directorio `./src` donde alojaremos los ficheros correspondientes a los ejercicios que se nos plantea en esta práctica, además de preparar la documentación con typedoc y las pruebas unitarias (TDD) con Mocha y Chai.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN TYPEDOC

Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/). Como ya desde la práctica 3 nos habíamos introducido a la herramienta **Typedoc**, solo queda seguir los mismos pasos mecánicos para esta práctica. Dicho informe creado en Typedoc hecho con los comentarios de los ejercicios de esta práctica se aloja en:

[Informe Typedoc Práctica 5]() 

O también mirando en los apartados **Objetivos** y **Bibliografía/ webgrafía** de este informe.

Comenzamos con la instalación de typedoc:

![Instalación typedoc](https://i.imgur.com/MgB701j.jpg)


Con ello podemos ver que se ha creado un directorio, que es como organizará typedoc la documentación que es por módulos, creando así `./node_modules`. Continuaremos con la configuración para poder usar Typedoc, primero si no se ha creado por defecto crear el **typedoc.json**, lo creamos y le añadimos la ruta de los ficheros a los que haremos el seguimiento de documentación. Y en el apartado `"out: "` pondremos el directorio donde se alojará toda esa documentación. Tras guardar dicha configuración se genereará automáticamente el directorio `./doc`.

![typedoc.json](https://i.imgur.com/K7eViEk.jpg)

Para poder usar la herramienta necesitamos invocarla con un comando, dicho comando será: `npm run [nombre_invocación]`, el nombre de invocación es lo siguiente que configuraremos en el **package.json**, para ello pondremos en la parte de scripts del fichero:

> `"doc": "typedoc"`

- **doc**: será el nombre con el que ejecutaremos la herramienta
- **typedoc**: la herramienta que lleva la documentación de la práctica

Esto quedaría tal que:

![Typedoc configuracion package.json](https://i.imgur.com/bbibywr.jpg)


Ya tendríamos la documentación en el directorio `./doc` para ejecutarla serviría con el comando ´npm run doc´ como antes especificamos. Quedando una estructura como:

![Estructura con typedoc](https://i.imgur.com/6rK5szx.jpg)

Esto genera documentación pero a partir de comentarios de TypeScript del estilo `/** */` con esta forma especificando la función, los parámetros, lo que devuelve, los snippet...

Esto guardaría esos comentarios en forma de página HTML para la documentación, tendríamos que ir al fichero `index.html` en el directorio de `./modules`, y con el click derecho pinchar sobre la opción de: __Open with Live Server__ y así generaría una página HTML con los comentarios en forma de documentación.

Finalizando así la documentación con Typedoc.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━







▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN MOCHA Y CAHI



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 1

/**
 * ### EJERCICIO 1:
 * #### ¿En qué consiste?
 * Pasas al programa un año y si cumple las condiciones establecidas te dirá si el año es bisiesto o no
 * @param year Consiste en el año que pasaremos a la función para ver si es bisiesto
 * @return `true` Si el año es bisiesto 
 * @return `false` Si el año **NO** es bisiesto
 * 
 */
 
 
 /**
 * ```typescript
 * leapYear = isLeapYear(1997)
 * @return `false`
 * ```
 */



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 2

/**
 * ### EJERCICIO 2:
 * #### ¿En qué consiste?
 * Dos funciones, una te convierte el decimal en notación factorial y la otra el factorial en notación decimal
 * ##### FUNCIÓN `decimalToFactorial`
 * @param ndecimal Consiste en el decimal que pasaremos a la función para convertirlo en su notación factorial
 * @return `factorial` correspondiente
 * ##### FUNCIÓN `maxfactorial`
 * @param ndecimal Consiste en el decimal que pasaremos a la función para encontrar el máximo factorial por el que se puede dividir
 * @return `factorialrecursive` el factorial correspondiente de llamar a la función recursiva que calcula los factoriales
 * ##### FUNCIÓN `factorialrecursive`
 * @param nfactorial Consiste en el factorial que pasaremos a la función para encontrar su resultado
 * @return `nfactorial * factorialrecursive (nfactorial-1)` el factorial correspondiente 
 */


/**
 * ```typescript
 * resultado = decimalToFactorial(463)
 * @return 341010
 * ```
 */


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 3

/**
 * ### EJERCICIO 3:
 * #### ¿En qué consiste?
 * Queremos comprobar la validez de un determinado mensaje en función de unas reglas preestablecidas.
 * @param cadena Consiste en la cadena alfanumérica que pasaremos del estilo `2hi`
 * @return `true` Si es válida la cadena según dichas reglas
 * @return `false` Si **NO** es válida la cadena según dichas reglas
 * 
 */
 
 
 /**
 * ```typescript
 * 
 * result1 = isValid("2hi")
 * @return `true`
 * 
 * result2 = isValid("5hello")
 * @return `true`
 * 
 * result3 = isValid("2hi3")
 * @return `false`
 * 
 * result4 = isValid("2hiii")
 * @return `false`
 * ```
 */




━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 4

/**
 * ### EJERCICIO 4:
 * #### ¿En qué consiste?
 * Pasas al programa dos patrones de nombrar variables tipo : SnakeCase y CamelCase (`hola_mundo` y `holaMundo`), respectivamente y puede pasar de un tipo de patrón al otro con dos funciones **fromSnakeToCamelCase** y **fromCamelToSnakeCase**
 * #### FUNCIÓN `fromSnakeToCamelCase`
 * @param cadenasnake Consiste en la cadena que cumple con las reglas de patrón de **SnakeCase**
 * @return cadenacamel la cadena correspondiente pero con el patrón **CamelCase**
 * #### FUNCIÓN `fromCamelToSnakeCase`
 * @param cadenacamel Consiste en la cadena que cumple con las reglas de patrón de **CamelCase**
 * @return cadenasnake la cadena correspondiente pero con el patrón **SnakeCase**
 * 
 */
 
 /**
 * ```typescript
 * 
 * cadena_snake = "sample_string";
 * @return `sampleString`
 * 
 * cadenaCamel = "sampleString";
 * @return `sample_string`
 * ```
 */



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 5

/**
 * ### EJERCICIO 5:
 * #### ¿En qué consiste?
 * Pasas al programa una cadena a la cual se le eliminan las 'a' y 'e', para ello hacemos uso de expresiones regulares
 * @param cadena Consiste en la cadena a la cual se eliminarán las a'es y la e's.
 * @return `resultado` la cadena que ya tiene dichas vocales eliminadas.
 * 
 */

/**
 * @param reemplazo1 Es una expresión regular a la cual se le han eliminado las a's, con el flag `g` conseguimos que se repita en toda la cadena que se lee
 */
var reemplazo1 = /a/g;
/**
 * @param reemplazo2 Es una expresión regular a la cual se le han eliminado las e's, con el flag `g` conseguimos que se repita en toda la cadena que se lee
 */
 
 /**
 * ```typescript
 * cadena = "Beard Jeans Hairbrush Knuckleduster Sand"
 * @return `=> Brd Hirbrush Jns Knuckldustr Snd`
 * ```
 */
 
 
 
━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 6

/**
 * ### EJERCICIO 6:
 * #### ¿En qué consiste?
 * Programa basado en el [Proceso de verificación ISBN-10](https://en.wikipedia.org/wiki/International_Standard_Book_Number) se usa para validar la identificación de números. Normalmente contienen guiones y siguen un patrón como: 3-598-21508-8.
 * @param cadena Consiste en la cadena correspondiente al código ISBN que se le pasa para validar la identificación de los números
 * @return `true` Si el ISBN cumple las reglas, es decir, es válido 
 * @return `false` Si el ISBN **NO** cumple las reglas, es decir, es válido
 * 
 */
 
 /**
 * ```typescript
 * ISBN = "3-598-21508-7";
 * @return `false`
 * ```
 */
 
 
 
 ━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 7

/**
 * ### EJERCICIO 7:
 * #### ¿En qué consiste?
 * El programa recibe como parámetro un entero positivo y devuelve el siguiente número mayor que pueda ser formado al reposicionar sus dígitos.
 * @param cifra Consiste en el número con mínimo dos dígitos para poder reposicionar dichos dígitos entre sí
 * @return `resultado` El número siguiente mayor que puede ser formado al reposicionar los dígitos de `cifra`.
 * 
 */
 
 /**
 * ```typescript
 * cifrain = 12;
 * @return `21`
 * ```
 */



 ━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 8

/**
 * ### EJERCICIO 8:
 * #### ¿En qué consiste?
 * A partir de cadenas de texto que representan direcciones IPv4, la función recibe como parámetros dos cadenas y devuelve un valor numérico que representa el número de IPs disponibles en el rango correspondiente.
 * @param ips1 Consiste en la cadena con la IP de del rango mínimo
 * @param ips2 Consiste en la cadena con la IP de del rango mayor 
 * @return `resultado` El rango que sale de la diferencia entre la `ips2`(ip con rango mayor) y `ips1`(ip con rango menor)
 * 
 */
 
 /**
 * ```typescript
 * ips_1 = "10.0.0.0";
 * ips_2 = "10.0.0.50";
 * @return `Rango == 50`
 * ```
 */
 
 
 
━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 9

/**
 * ### EJERCICIO 9:
 * #### ¿En qué consiste?
 * Pasas al programa el tipo de tu pokemon, el tipo del pokemon rival, la capacidad de ataque de tu pokemon y la capacidad de ataque del pokemon rival y te saca cuanto daño haces tu y cuanto daño te hace el rival con la fórmula del daño de la función adicional `calcularDaño`
 * #### FUNCIÓN **efectividadPokemon**
 * @param tipo1 Consiste en el tipo de tu pokemon (fuego|agua|hierba|eléctrico)
 * @param tipo2 Consiste en el tipo del pokemon rival (fuego|agua|hierba|eléctrico)
 * @param ataque1 Consiste en la capacidad de ataque de tu pokemon
 * @param ataque2 Consiste en la capacidad de ataque del pokemon rival
 * @return `efectividad1` y `efectividad2` Consiste en las efectividades del tipo del pokemon tuyo y el pokemon rival, respectivamente
 * #### FUNCIÓN **calcularDaño**
 * @param ataque Recibe el ataque del tipo
 * @param efectividad Recibe la efectividad
 * @return `daño` con la fórmula, teniendo la defensa predefinida a _204_, como estándar, el ataque y la efectividad se calcula el daño que hace el pokemon.
 * 
 */
 
 /**
 * ```typescript
 * pokemon1 = "eléctrico";
 * pokemon2 = "agua";
 * capacidad_ataque1 = 100;
 * capacidad_ataque2 = 160;
 * @return `Daño que causa tu equipo Pokemon: ${dañoPoke1}`
 * @return `Daño que realiza el equipo rival: ${dañoPoke2}`
 * ```
 */
 

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 10

/**
 * ### EJERCICIO 10:
 * #### ¿En qué consiste?
 * Programa que comprueba la validez de un nombre de usuario según unos criterios
 * @param usuario Consiste en el nombre de usuario que le pasamos para validar
 * @return `true` Si es válido 
 * @return `false` Si  **NO** es válido
 * 
 */
 
 
 /**
 * ```typescript
 * user_in = "hola";
 * @return `false`
 * ```
 */

 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## DESARROLLO DEL INFORME CON GITHUB PAGES


Tras finalizar la práctica se nos requiere un informe en con el formato de estilos de Markdown en **GitHub Pages**, para ello usamos la guía de estilos de Markdown en [Markdown guide](https://guides.github.com/features/mastering-markdown/).

Y así finalizamos esta práctica e informe redactado en el archivo **index.md**.





▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## CONCLUSIONES


Conclusión sobre la práctica e informe, aquí plantearé la dinámica de la práctica y posibles dudas que me hayan surgido y solucionado. La práctica en sí hubieron ejercicios donde tuve dificultad donde acudí a la tutoría, pero hubieron ejercicios algo complejos de realizar si no usaba expresiones regulares. Estas me han beneficiado bastante a la hora de resolverlos y/o plantearlos. Por otro lado, la herramienta typedoc no me ha causado problemas y he sabido desenvolverme con ella. En cambio, otra uso y herramientas opcionales que quise empezar a usar como son: **Mocha** y **Chai**, me han causado dificultad. Sé que no eran obligatorias pero quise hacer esta práctica con esas herramientas y me ha saltado un error en la instalación que tendré que consultar con el profesor. Por último, el informe pues ya en la práctica 1, me familiaricé con la herramienta de GitHub Pages y ha sido sencillo.

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## BIBLIOGRAFÍA Y/O WEBGRAFÍA


- [Enunciado práctica](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/)
- [Repositorio con ejercicios y estructura básica](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101202952/tree/desarrollo/p3_Ejercicios_datos_funciones)
- [Informe documentación con Typedoc](http://127.0.0.1:5500/p3_Ejercicios_datos_funciones/docs/index.html)
