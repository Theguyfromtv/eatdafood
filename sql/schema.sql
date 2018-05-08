USE burger_db;


CREATE TABLE burgers (
    id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    burger_img VARCHAR(255) NOT NULL,
    burger_res VARCHAR(255) NOT NULL,
    eaten BOOLEAN,
    email VARCHAR(255) NOT NULL
);