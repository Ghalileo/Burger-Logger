-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE IF NOT EXISTS burgers_db;

USE aepftka7pyk8ll2s;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT
    , burger_name VARCHAR(100) NOT NULL
    , eaten BOOLEAN DEFAULT false
    , PRIMARY KEY (id)
);

SELECT * FROM burgers;