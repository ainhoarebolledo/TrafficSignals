Visor de datos de tr�fico de la ciudad de Madrid.

versi�n 0.01-25.05.18


Notas de la versi�n:


Este programa permite realizar consultas sobre los datos de tr�fico que publica el Ayuntamiento de Madrid en su portal de datos abiertos.

El programa se divide en dos partes fundamentales.

1.- Una funcionalidad que permite procesar los datos, separ�ndolos por d�as, para facilitar su posterior uso.
2.- Un programa principal o Main que nos da una serie de opciones de consulta:

2.1.- Acceder a los valores horarios de un punto de medici�n dado en un periodo de tiempo dado.

  Periodo de tiempo: desde yyyy-mm-dd-hh hasta yyyy-mm-dd-hh
  Retornar� los valores medios de cada una de las horas del d�a (la media de los cuatro valores horarios) en el medidor dado.
  
  Sirve b�sicamente para poder acceder a los datos de una forma ordenada.

  En este apartado nos permitir� guardar la consulta como un archivo hoja de c�lculo.
  

2.2.- Acceder a la media de los valores horarios de un punto de medici�n dado en un periodo de tiempo dado.

  Periodo de tiempo: desde yyyy-mm-dd-hh hasta yyyy-mm-dd-hh
  Retornar� un valor medio de todas las mediciones horarias comprendidas en el rango de tiempo dado.
  
  Sirve para medir la imd media en periodos de tiempo determinados (un d�a concreto, una hora concreta, horas punta�)
  

2.3.- Comparador de valores horarios entre dos puntos de medici�n dados en un periodo de tiempo dado.

  Periodo de tiempo: desde yyyy-mm-dd-hh hasta yyyy-mm-dd-hh.
  Retornar� los valores medios de cada una de las horas del d�a en ambos medidores con la variaci�n en %.


2.4.- Comparador de la media de los valores horarios de dos puntos de medici�n dados en un periodo de tiempo dado.

  Periodo de tiempo: desde yyyy-mm-dd-hh hasta yyyy-mm-dd-hh.
  Retornar� la media de ambos puntos en el periodo de tiempo dado acompa�ado de su variaci�n en %.




Instrucciones de uso:


1.- Descomprimir Visor_Trafico_Compartir en tu disco duro:

Hay que tener en cuenta que los datos de tr�fico ocupan bastante espacio, 
que sea en una partici�n en la que tengas hueco suficiente (800 MB cada mes aprox).


En la carpeta descomprimida encontraremos:


- La carpeta Datos tr�fico: en esta carpeta se almacenar�n los datos una vez procesemos los archivos descargados de la p�gina del ayuntamiento.

- La carpeta M�dulos: aqui hay un archivo.py que contiene diferentes m�todos (trozos de programa) que se utilizan en el programa principal.

- El archivo 0.- Main.py, que viene siendo el programa principal.

- El archivo 1.- Formateo de datos.py, que es una utilidad para procesar los datos y que el programa los pueda utilizar.
- El leeme.txt, que viene siendo este archivo.



2.- Tener instalado python, a partir de la versi�n 3.6. 

Es muy f�cil de instalar y se puede encontrar aqu�: https://www.python.org/downloads/



3.- Formatear los datos mensuales:

Los datos de las mediciones los cuelga el Ayuntamiento en el portal de datos abiertos en este enlace: 
https://datos.madrid.es/sites/v/index.jsp?vgnextoid=33cb30c367e78410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD

Aqui podemos encontrar los archivos correspondientes a los sucesivos meses (los nuevos se van a�adiendo con un par de meses de margen). 
Estos archivos est�n en formato .csv y contienen todas las mediciones de todos los medidores cada 15 minutos, generando un archivo de muchismas l�neas.

Para hacer estos datos m�s accesibles, junto con el programa principal viene la utilidad 1.- Formateo de datos.py. 
Este programa separa el archivo .csv archivos m�s peque�os correspondientes a los d�as de cada mes.

El proceso de transformar los datos tarda bastante pero luego hace mucho m�s f�ciles y �giles las b�squedas.

El tema es que para acceder a los datos de un mes en concreto, o de periodos que incluyan varios meses, hay que tener los datos descargados y procesados, 
si no el programa dar� error.

Para usar la utilidad basta con darle doble click y seguir las instrucciones de pantalla, te pedir� la ruta del archivo csv 
y guardar� el solito los datos dentro de la carpeta Datos tr�fico, con el mes correspondiente. 

Si se le cambia el nombre a cualquiera de las carpetas o archivos el programa deja de funcionar, as� que hazlo, pero solo por diversi�n.




4.- Hacer las consultas de datos.

Una vez formateados los datos ya se puede usar el programa 0.- Main.py 
(�nicamente para fechas en las que ya tengamos los datos procesados, eso si).

El programa se ejecuta con doble click y tiene sus propias instrucciones.

El entorno es muy hostil y bastante feo porque se ejecuta en una ventana tipo MS-DOS que no deja hacer m�s grande, y es una de las cosas que habr� que solucionar.

Otra de las primeras mejoras ser� permitir que la salida sea en un documento de texto o en un documento de excel directamente.



Y ya, a pasarlo bien.