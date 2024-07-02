CREATE DATABASE loja_doces2;

USE loja_doces2;

CREATE TABLE clientes (
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(30) NOT NULL
);

INSERT INTO clientes (nome_cliente) VALUES 
("julio"), ("mario"), ("beto"),("jane");

SELECT * FROM clientes;

CREATE TABLE pedidos (
	id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    nome_pedido VARCHAR(30) NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

INSERT INTO pedidos (id_cliente,nome_pedido) VALUES 
(1,"Red Velvet"),
(1,"Bolo de Laranja"),
(2,"Torta de Frango");

SELECT * FROM pedidos;
