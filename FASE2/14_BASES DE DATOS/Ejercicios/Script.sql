
create schema vankexercises;

-- Ejercicio 1

create table "vankexercises"."clientes"(
  id SERIAL primary key, -- Serial es autoincrementable
  nombre varchar(100) not null,
  email varchar(150) not null unique,
  telefono varchar(15)
);

-- Ejercicio 2

insert into "vankexercises"."clientes" (nombre, email, telefono) values 
('Pepito Perez', 'pepito@gmail.com', '3102784523'),
('Perenganito López', 'perenganito@gmail.com', '31032836713'),
('Juancho Martinez', 'juancho@gmail.com', '3102782364'),
('Fulanita Torres', 'fulanita@gmail.com', '31232896713'),
('Felipito Gonzalez', 'felipito@gmail.com', '3152084000');

-- Ejercicio 3

select * from "vankexercises"."clientes";

-- Ejercicio 4

select * from "vankexercises"."clientes" where nombre ilike '%A%';

-- Ejercicio 5

update "vankexercises"."clientes" set telefono = '1122334455' where id = 1;

-- Ejercicio 6

delete from "vankexercises"."clientes" where id = 3;

-- Ejercicio 7

create table "vankexercises"."pedidos" (
	id serial primary key,
	id_cliente int references "vankexercises"."clientes"(id),
	fecha date not null,
	producto varchar(200) not null,
	cantidad int 
);

-- Modificar propiedades
alter table "vankexercises"."pedidos" 
alter column cantidad set not null;

-- Ejercicio 8

insert into "vankexercises"."pedidos" (id_cliente, fecha, producto, cantidad) values 
(1, '2025-01-10', 'Guayaba', 5),
(4, '2024-12-20', 'Camisa', 2),
(5, '2025-02-13', 'Licuadora', 1);

-- Ejercicio 9

select c.nombre, p.fecha 
from "vankexercises"."clientes" c
join "vankexercises"."pedidos" p on c.id = p.id_cliente;

-- Ejercicio 10 

create view "vankexercises"."vista_pedidos" as 
select c.nombre as cliente, p.fecha, p.producto, p.cantidad
from "vankexercises"."pedidos" p
join "vankexercises"."clientes" c on c.id = p.id_cliente;

-- Ejercicio 11

select cliente, fecha, producto from "vankexercises"."vista_pedidos";

-- Ejercicio 12



