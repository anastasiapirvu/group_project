
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

INSERT INTO users (first_name, last_name)
VALUES
    ('Leslie', 'Knope');


INSERT INTO items (name, quantity, unit, user_id)
VALUES
    ('Bananas', 3, 'bananas', 1),
    ('Eggs', 2, 'eggs', 1);