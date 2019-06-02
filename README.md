La instalacion de webpack debe ser:
npm i webpack webpack-cli --save-dev

2jun2019 - 4:43 pm:
Se agrega webpack.config.js custom para crear la carpeta CUPRA y dentro del bundle.
el nombre del archivo webpack.config.js es por convencion para que al momento de 
crear la tarea en el package.json la identifique correctamente.

2jun2019 - 5:01 pm:
Se agrega otra tarea "webpack:external" webpack --config en package.json para poder ejecutar el archivo webpack desde otra ubicacion diferente a la del directorio raiz.
Se utiliza "path" de node.js para resolver rutas relativas.



