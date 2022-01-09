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

- a) id (Con el Título "BookingId")
- b) firstName y LastName (Con el Título "Cliente")
- c) bookingTime (Con el Título "Fecha de Creación")
- d) streetAddress (Con el Título "Dirección")
- e) bookingPrice (Con el Título "Precio")

Esta grilla DEBE poder mostrar todos los registros obtenidos. Además de lo anterior, debe
existir alguna opción de filtrado, por el campo bookingId y bookingPrice, y que permita
mostrar dinámicamente solo las opciones que corresponden al filtro seleccionado (like y/o >=, <=).

Se debe poder agregar un nuevo registro.

# Backend Details

## Stack required

- PHP ^7.3
- MySQL ^5.7,
- Composer ^2.1.6,

## Framework and libraries used

- laravel/lumen-framework: ^8.3.1,
- fruitcake/laravel-cors: ^2.0,
- tymon/jwt-auth: dev-develop

# Steps to run our backend

```
cd backend/
```
1. First create database and copy file .env.examplet to .env and add the database variables.

2. Install packages and dependencies

```
composer install
```

3. Generate token secret

```
php artisan jwt:secret
```

4. Run migrations and seeders

```
php artisan migrate:refresh --seed
```

5. Run backend

```
php -S localhost:8000 -t public
```

# Frontend Details

## Stack required

- NodeJs ^10.13
- Angular CLI ^10.2.3

## Framework and libraries used

- angular: ^10.2.4
- angular/material: ^10.2.7

# Steps to run our frontend

```
cd frontend/
```

1. Install packages

```
npm install
```

2. Run frontend

```
ng serve
```
The project will be located in http:localhost:4200 by default
if this port is used, will run in another.

3. Log In with test credentials

Use the follow credentials to log in as a test user

```
Correo: test@gmail.com
Password: 12345678
```

# Details of structure folders

To see more details about the structure folder, enter to backend or frontend folder to see
the internal readme.