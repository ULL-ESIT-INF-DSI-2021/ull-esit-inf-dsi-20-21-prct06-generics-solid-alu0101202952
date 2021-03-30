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


Los objetivos en esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también deberán utilizar los principios SOLID de diseño orientado a objetos. Además nos iniciaremos con los conceptos de Instanbul y Coveralls.

- **ENLACE A LA DOCUMENTACIÓN EN TYPEDOC**
> - [Informe documentación con Typedoc](http://127.0.0.1:5500/docs/index.html)



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PASO PREVIO: ACEPTACIÓN DE TAREA DE GITHUB CLASSROOM


Antes de comenzar se nos requiere que aceptemos la tarea asignada en el GitHub Classroom:

![Asignación GitHub Classroom](https://i.imgur.com/ciw11DY.jpg)

Con ello ya podríamos trabajar en esta práctica.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA BÁSICA DE PROYECTOS


Lo primero sería estructurar el workspace de nuestra práctica, primero clonaremos el repositorio y lo iremos estructurando:

![Clonado](https://i.imgur.com/D7Bu2t1.jpg)

Comenzamos modificando el **package.json** con el comando `npm init --yes` y creamos de forma automática el fichero de configuración **tsconfig.json** eso lo haremos con el comando `tsc --init` y se crearía el tsconfig.json por defecto, nosotros lo modificaremos algo más para poder trabajar correctamente, necesitaremos poner la opción **exclude []** dentro del tsconfig.json para indicarle al compilador los directorios que exluiría a la hora de compilar explícitamente quedando:

![tsconfig.json](https://i.imgur.com/xOpDPVB.jpg)

Esos 3 directorios los exluiríamos a la hora de hacer `npm start` y no fallar a la hora de compilar los tests o los node-modules.

Para ello creo el directorio donde empezaremos a estructurar los directorios y ejercicios, además de configurar el **package.json**, quedando el package.json tal que:

![package.json](https://i.imgur.com/uWD4cGX.jpg)

También necesitamos crear a partir de este el **tsconfig.json** con la ruta de localización de los ejercicios.ts, en el directorio `./src` y sus ejecutables .js en el directorio `./dist`, como hemos hecho en otras prácticas:

Manualmente, se crearía ambos directorios donde trabajaremos. 

También necesitaremos una compilación con control automático de cambios que instalaremos con el comando `npm install --save-dev tsc-watch`, tal que:

![Compilacion control de cambios automáticos](https://i.imgur.com/hknZngX.jpg)

Además añadiremos la configuración al **package.json**

![Configuracion package tswatch](https://i.imgur.com/QQ2ctWn.jpg)

Por último en la organización de la estructura básica será la instalación del paquete **EsLint**, esto por si quisiéramos comprobar la sintaxis de nuestro código, encontrar y solucionar problemas en el mismo. Primero lo instalamos con el comando:

> `npm install -g eslint` 

![Instalación esLint](https://i.imgur.com/LBI0D9U.jpg)

Y lo inicializamos con `eslint --init` añadiéndole esto valores:

![Configuración Eslint](https://i.imgur.com/Xp8pzj7.jpg)

Luego modificar el fichero .eslint que se crea con las reglas correspondientes, quedando:

![Esdlint configuracion fichero](https://i.imgur.com/Cf2bjc6.jpg)

Además crearemos el fichero .gitignore donde excluiremos los siguientes directorios: 

![gitignore](https://i.imgur.com/DzHhrEB.jpg)

Tras la estructura básica nos dedicaremos a trabajar en el directorio `./src` donde alojaremos los ficheros correspondientes a los ejercicios que se nos plantea en esta práctica, además de preparar la documentación con typedoc y las pruebas unitarias (TDD) con Mocha y Chai.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN TYPEDOC

Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/). Como ya desde la práctica 3 nos habíamos introducido a la herramienta **Typedoc**, solo queda seguir los mismos pasos mecánicos para esta práctica. Dicho informe creado en Typedoc hecho con los comentarios de los ejercicios de esta práctica se aloja en:

[Informe Typedoc Práctica 6](http://127.0.0.1:5500/docs/index.html) 

O también mirando en los apartados **Objetivos** y **Bibliografía/ webgrafía** de este informe.

Comenzamos con la instalación de typedoc:

![Instalación typedoc](https://i.imgur.com/ySLfsAY.jpg)


Con ello podemos ver que se ha creado un directorio, que es como organizará typedoc la documentación que es por módulos, creando así `./node_modules`. Continuaremos con la configuración para poder usar Typedoc, primero si no se ha creado por defecto crear el **typedoc.json**, lo creamos y le añadimos la ruta de los ficheros a los que haremos el seguimiento de documentación. Y en el apartado `"out: "` pondremos el directorio donde se alojará toda esa documentación. Tras guardar dicha configuración se genereará automáticamente el directorio `./doc`.

![typedoc.json](https://i.imgur.com/fh6jMZo.jpg)

Para poder usar la herramienta necesitamos invocarla con un comando, dicho comando será: `npm run [nombre_invocación]`, el nombre de invocación es lo siguiente que configuraremos en el **package.json**, para ello pondremos en la parte de scripts del fichero:

> `"doc": "typedoc"`

- **doc**: será el nombre con el que ejecutaremos la herramienta
- **typedoc**: la herramienta que lleva la documentación de la práctica

Esto quedaría tal que:

![Typedoc configuracion package.json](https://i.imgur.com/tuQoXyb.jpg)


Ya tendríamos la documentación en el directorio `./doc` para ejecutarla serviría con el comando ´npm run doc´ como antes especificamos. 
Esto genera documentación pero a partir de comentarios de TypeScript del estilo `/** */` con esta forma especificando la función, los parámetros, lo que devuelve, los snippet...

Esto guardaría esos comentarios en forma de página HTML para la documentación, tendríamos que ir al fichero `index.html` en el directorio de `./modules`, y con el click derecho pinchar sobre la opción de: __Open with Live Server__ y así generaría una página HTML con los comentarios en forma de documentación.

Finalizando así la documentación con Typedoc.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━







▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN MOCHA Y CHAI

En este apartado como ya hemos anteriormentem, tendremos que volver a ejecutar dichos pasos para poder trabajar con Pruebas Unitarias con las herramientas **Mocha** y **Chai**. Primero instalaremos las dependencias y paquetes de Mocha y chai. Para ello ejecutaremos:

![Instalación Mocha y Chai](https://i.imgur.com/YJgCv9g.jpg)

A continuación con el comando `touch .mocharc.json` crearemos el fichero de configuración de la herramienta Mocha, este irá en la raíz de el proyecto y nos indicará utilidades para hacer TDD, es decir las pruebas unitarias. Para ello le indicaremos que las pruebas unitaras se alojarán en el directorio **./tests** y tendrán una terminología de **.spec.ts**. Esto quedaría:

![configuración .mocharc.json](https://i.imgur.com/zwBQ19e.jpg)

Ya tendremos una configuración básica de la herramienta, pero necesito crear el directorio **./tests** y los ficheros que tendrán las pruebas unitarias de los 3 ejercicios que se nos plantean, tendrá una estructura > `ejercicio-n.spec.ts`, siendo n = [1-3], con la enumeración de cada ejercicio:

![Crear spec](https://i.imgur.com/GSKmTke.jpg)

Como ha pasado con la herramienta **Typedoc** indicaremos en el **package.json** con qué comando, ejecutaremos la herramienta de mocha. Esta herramienta se ejecuta tal que `npm run [nombre_de_invocación]`, el nombre de invocación en nuestro caso será **test**, quedando el comando completo para ejecutar las pruebas unitarias de la forma: 

> `npm run test`

Este nombre de invocación es el que configuraremos en el package.json, quedando:

![mocha en package.json](https://i.imgur.com/u12sCYM.jpg)

Finalizando con todo esto la configuración de las herramientas necesarias para ejecutar los ejercicios mediante TDD. Quedando la estructura final con los ficheros además del .nojekyll, los cuales no se nombraron pero porque se dan por hechos, como:

![Estructura final proyecto con](https://i.imgur.com/z2rKKPl.jpg)

Pero no acabaríamos con esto ya que añadimos unas nuevas variantes y son informe de seguimiento con la herramienta **Instanbul** y **Coveralls**.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN, CONFIGURACIÓN COVERAGE, INSTANBUL, COVERALLS

Comenzaremos instalando los paquetes y dependencias de las herramientas asociadas a Instanbul, como es **nyc** y la de **coveralls**, tal que:

![Instalación nyc y coveralls](https://i.imgur.com/m1kcZvf.jpg)

Luego pasaremos al **package.json** para configurar la herramienta primero de **nyc**:

![Configuracion nyc package.json](https://i.imgur.com/mWvYUnk.jpg)

Como se especificó en el package.json se ejecuta el informe de seguimiento con nyc con el comando `npm run coverage`:

![Comando ejecucion](https://i.imgur.com/DMnYAvO.jpg)

Mostrando por terminal en un comienzo un informe de seguimiento, en mi caso vacío, tal que:

![Informe seguimiento vacío](https://i.imgur.com/9xoR2Jl.jpg)

Tras esto pasaremos a configurar la herramienta de Coveralls, primero tendremos que acceder a la página de Coveralls e iniciar sesión:

![Iniciar sesion coveralls](https://i.imgur.com/LVbymJY.jpg).

Como queremos preparar un informe de seguimiento con esta herramienta necesitamos especificar el repositorio de Github al que se le hará. Primero se ha de cambiar la visibilidad del repositorio para hacerlo _público_ y así Coveralls lo reconozca. Y así luego habilitar el repositorio, añadiéndolo con **ON**:

![Añadir repo](https://i.imgur.com/hGXEjff.jpg)

Luego copiaremos un link que se genera con coveralls asociado a dicho repo y necesitaremos copiar para añadir a la estructura de nuestro repositorio:

![lin coveralls](https://i.imgur.com/aaQWNQO.jpg)

Tras ello pasaríamos a la raíz de nuestro repositorio y crearemos el fichero > `.coveralls.yml`:

![crear fichero .coveralls.yml](https://i.imgur.com/a41IKsN.jpg)

A continuación abrimos dicho fichero y pegaríamos el link que nos genera la herramienta coveralls y anteriormente habíamos copiado:

![configuración fichero .coveralls.yml](https://i.imgur.com/QXKZlCV.jpg)

Luego pasaríamos al package.json donde modificaríamos la línea de comando donde habíamos configurado con nyc para seguir el reporte del informe de seguimiento con coveralls y posterior el borrado del directorio que genera nyc:

![configuracion package coveralls](https://i.imgur.com/Yj6xYwt.jpg)

Y para guardar cambios y ver como ha cambiado volvemos a ejecutar el seguimiento, seguirá vacío hasta que añada algo de código con el que trabajar, lo cual mostraré más adelante.

![volver ejecutar informe](https://i.imgur.com/GFeLL0Z.jpg)

Si añadiéramos código, volviéramos a ejecutar el coverage, luego fuéramos a la página de coveralls tendríamos que ir al apartad **Badge** del repo que se genera para copiar el markdown generado y pegarlo en el README.md:

![badge](https://i.imgur.com/zW7ba2c.jpg)

Finalmente al generar la documentación con `npm run doc` y Abrirlo con **Live Server** se mostraría el badge que antes henos guardado en el README.md.

Por último la estructura final y definitiva que tendría mi repositorio sería:

![Estructura final](https://i.imgur.com/b1Vn4cW.jpg)


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



### EJERCICIO 1





━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 2



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 3





━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


 
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
