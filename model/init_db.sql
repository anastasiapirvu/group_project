
-- (Re)create the table

DROP TABLE IF EXISTS items;
CREATE TABLE items(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    quantity INT NOT NULL
);

-- Insert some test data

INSERT INTO items (name, quantity)
VALUES
    ('Bananas', 3),
    ('Eggs', 2);