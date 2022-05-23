# Evaluación Front End

## Scripts Disponibles


Para instalar los node modules del proyecto es necesario ejecutar:

### `npm install`

Para correr el proyecto web es necesario ejecutar:

### `npm start`

Para correr el servidor json-server es necesario ejecutar:

### `npm run init-api`

Si se desea que la aplicación react funcione con el json-server de manera local, es necesario cambiar la variable REACT_APP_API_URI del archivo .env por http://localhost:8000/

### `npm run init-api`

Nota: El proyecto hace uso de la plataforma firebase para el almacenamiento de imagenes. Es por eso, que por motivos de seguridad; el archivo .env no está incluído en el repositorio. En caso de requerirlo, mande un mensaje al siguiente correo: marioapolinar98@gmail.com

Asímismo, para la ejecución local, el siguiente comando está disponible para iniciar tanto el servidor como la aplicación de react

### `npm run run-all`


## ¿Qué es lo que te gustó de tu desarrollo?

Personalmente me llamó la atención el hecho de poner a prueba mis habilidades como desarrollador front end. Fue un poco tedioso el definir estilos uno por uno, sin embargo, este aspecto lo hizo divertido. Me pareció agradable el poder generar un diseño responsivo para ciertos dispositivos, de tal manera que la distribución de componentes cambia según el dispositivo.
Por último, el hecho de implementar herramientas nuevas para mi, como lo es el caso de json-server y redux hizo que el desarrollo fuera retador y a su vez, mantuvo el interés por aprender estas dependencias.

### Si hubieras tenido más tiempo ¿Qué hubieras mejorado o qué más hubieras hecho?

A mi parecer, me hubiera gustado implementar el diseño responsivo para más dispositivos, y por ende, más resoluciones de pantalla, ya que de momento, sólo fue implementado para computadora y para celular. Además, hubiese sido lo más óptimo pulir ciertos estilos de los componentes, como lo es el caso del modal y alguna información de los cards en resoluciones pequeñas.
Por último, otro requerimiento a considerar pudo haber sido la posibilidad de editar los datos de cada personaje, de manera que se pudiera actualizar el estatus del mismo.

### Pain point durante el desarrollo

La problemática más relevante presentada durante el desarrollo fue la implementación de redux para guardar los personajes favoritos. Personalmente tenía poca experiencia con el uso de redux, por lo que inicialmente, la integración de esta herramienta resultó un poco confusa. No obstante, la implementación se pudo resolver viendo unos cuantos tutoriales y leyendo la documentación.