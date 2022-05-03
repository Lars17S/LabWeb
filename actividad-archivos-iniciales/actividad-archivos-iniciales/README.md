# Test Unitarios
Los tests unitarios de mocha están en la carpeta 'test'. Para correrlos primero es necesario:
- ```npm i```
- ```./node_modules/mocha/bin/mocha```
- ```npm run mochatest```.

# Autenticación
Para registrar o crear un usuario es necesario crearlo en "http://localhost:3000/usuarios/create" o ingresando desde home > usuarios > nuevo usuario.<br><br>
Para hacer login es necesario haber verificado el email e ingresar el password correctamente, en "http://localhost:3000/usuarios/login" o 
ingresando desde home > usuarios > hacer login.<br><br>
NOTA: La verificación se puede hacer usando el servicio de Ethereal Email.
- user: norma.bernier40@ethereal.email
- pass: EUW9777erTFCQBYFaW

# Persistencia en MongoDB
- Los usuarios y bicicletas persisten en mongodb. Recuerda verificar que mongo esté habilitado en "mongodb://localhost:27017/red_bicicletas".
- Para crear una reservación para un usuario debes ingresar a home > usuarios > crear reservacion y posteriormente llenar el formato.
- Para ver el listado de reservaciones debes ingresar a home > reservas.
