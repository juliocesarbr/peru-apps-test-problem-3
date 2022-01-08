# Peru Apps Test - Problem 3

This repo contains the solution for problem 2

# Description of the problem

Se requiere el desarrollo de una WebApp desarrollada usando Angular o similar
Esta aplicación contempla 2 partes:

## Parte I:

Desarrollar un site implemente un acceso login con JWT o equivalente. Para el acceso
mediante token.

##  Parte II:

Con el token obtenido de la parte I, se debe obtener un listado de datos a mostrar en un
datagrid u otro elemento que estime conveniente, Los campos que se necesitan mostrar en
la grilla son los siguientes:

a) id (Con el Título "BookingId")
b) firstName y LastName (Con el Título "Cliente")
c) bookingTime (Con el Título "Fecha de Creación")
d) streetAddress (Con el Título "Dirección")
e) bookingPrice (Con el Título "Precio")

Esta grilla DEBE poder mostrar todos los registros obtenidos. Además de lo anterior, debe
existir alguna opción de filtrado, por el campo bookingId y bookingPrice, y que permita
mostrar dinámicamente solo las opciones que corresponden al filtro seleccionado (like y/o
>=, <=).
Se debe poder agregar un nuevo registro.

# Run backend

```
cd backend/
```

First create database and add variables in the .env file.

Generate token secret

```
php artisan jwt:secret
```

Second run migrations and seeders

```
php artisan migrate:refresh --seed
```

Run backend

```
php -S localhost:8000 -t public
```