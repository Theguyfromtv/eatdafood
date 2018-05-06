USE burger_db;

CREATE TABLE burgers (
    id INTEGER(10) AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    burger_img VARCHAR(255) NOT NULL,
    devaured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);