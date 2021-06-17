
-- (Re)create the table

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
);

DROP TABLE IF EXISTS items;
CREATE TABLE items(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    unit VARCHAR(20) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE,
);

-- Insert some test data

INSERT INTO items (name, quantity)
VALUES
    ('Bananas', 3),
    ('Eggs', 2);