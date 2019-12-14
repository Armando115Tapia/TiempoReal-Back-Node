## Información del proyecto

### Generar el proyecto

Para generar los módulos de node
<br>

`npm install`
<br>
Para generar el dist/(el código en js)
<br>
`tsc -w`
<br>
para levantar el proyecto

`nodemon dist` 
<br>
`node dist`
<br>
Para levantar el proyecto en modo desarrollo
<br>
`npm run dev`
### Arquitectura el proyecto

Los archivos principales del servidor son:

- El arhivo principal es el: index.ts
- El archivo server.ts se configura el servidor
- En el directorio: routes estan las peticiones HTTP

### Instalación o configuración de express con typescript

`tsc --init`
<br>
Esto crea el archivo "tsconfig.json"