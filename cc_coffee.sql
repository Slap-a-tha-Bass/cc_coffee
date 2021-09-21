CREATE DATABASE cc_coffee;
USE cc_coffee;
DROP TABLE Users;
CREATE TABLE Users (
	id CHAR(36) PRIMARY KEY,
    full_name VARCHAR(32),
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    created_at DATETIME DEFAULT NOW()
);
INSERT INTO Users (id, full_name, email, password) VALUES ('182e91ec-70b6-4a3e-8bf7-000d447cb061', 'Corey DeLoach', 'test@test.com','$2b$12$uTnY/cqkPJCS35Hcrv2FK.xqxlS2N/5aEuz20Hb3BBTsLY0K5OMTK');
SELECT * FROM Users;
DROP TABLE Orders;
CREATE TABLE Orders (
	id CHAR(36) PRIMARY KEY,
    first_name VARCHAR(32) NOT NULL,
    drink_type VARCHAR(32),
    food_type VARCHAR(32),
    price VARCHAR(12),
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME ON UPDATE NOW()
);
DROP TABLE Drinks;
CREATE TABLE Drinks (
	id INT AUTO_INCREMENT PRIMARY KEY,
    drink_type VARCHAR(64),
    price VARCHAR(12)
);
DROP TABLE Food;
CREATE TABLE Food (
	id INT AUTO_INCREMENT PRIMARY KEY,
    food_type VARCHAR(64),
    price VARCHAR(12)
);
INSERT INTO Drinks (drink_type, price) VALUES ('Latte', 6);
INSERT INTO Drinks (drink_type, price) VALUES ('Cappuccino', 7);
INSERT INTO Drinks (drink_type, price) VALUES ('Cortado', 8);
SELECT * FROM Drinks;
INSERT INTO Food (food_type, price) VALUES ('Bagel', 4);
INSERT INTO Food (food_type, price) VALUES ('Cookie', 5);
INSERT INTO Food (food_type, price) VALUES ('Parfait', 7);
SELECT * FROM Orders;
INSERT INTO Orders (id, drink_type, food_type, price, first_name) VALUES ('1', 'Oak milk latte', 'Cinnamon roll', 13, 'Robert');
INSERT INTO Orders (id, drink_type, food_type, price, first_name) VALUES ('2', 'Lacroix', 'Omelette', 11, 'Lindsey');
