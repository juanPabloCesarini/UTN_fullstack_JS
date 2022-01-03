<h3 align="center">INSTALAR ANGULAR CLI</h3>
<p align="center">En consola ejecutar: npm install -g @angular/cli</p>
<h3 align="center">CREAR UNA APLICACION</h3>
<p align="center">ng new *nombre-app*</p>
<h3 align="center">LEVANTAR EL SERVIDOR</h3>
<p align="center">Dentro de la app: ng serve, en el navegador la url es: http://localhost:4200/</p>
<h3 align="center" color ="">CREAR COMPONENTE</h3>
<p align="center">ng generate component *nombre_componente*</p>
<h3 align="center">CREEAR SERVICIOS</h3>
<p align="center">ng generate service nombre-servicio</p>

<h2 align ="center">INSTALAR BOOSTRAP</h2>
<p align="center">npm install bootstrap jquery @popperjs/core</p>
<p align="center">En el archivo angular.json agregar</p>
<p>styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]</p>