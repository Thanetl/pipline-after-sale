-- init.sql

CREATE TABLE IF NOT EXISTS product (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL
);

INSERT INTO product (name, description, price) VALUES
    ('Product 1', 'Description 1', 10.99),
    ('Product 2', 'Description 2', 19.99);
