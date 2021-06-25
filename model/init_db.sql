
-- (Re)create the table
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;


CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
);

INSERT INTO users (username, password, email)
VALUES
('Leslie Knope', '98765xyz', 'leslieKnope@gmail.com'),
('Ben Wyatt', '12345abc', 'benwyatt@gmail.com');
    
    

CREATE TABLE items(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    unit VARCHAR(20) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert some test data
INSERT INTO items (name, quantity, unit, user_id)
VALUES
    ('Bananas', 3, 'bananas', 1),
    ('Flour', 200, 'grams', 2),
    ('Eggs', 2, 'eggs', 1);