
INSERT INTO users(email, password, role)
VALUES 
('1234@1234.com', '1234', 'member'),
('jeff@jeff.com', 'jeffjeff', 'member'),
('supersecure@notsecure.com', 'supersecret', 'member');


INSERT INTO products (name, photo_url, description, price, quantity, owner_id)
VALUES
('lamp', 'https://i.imgur.com/YwRiA2j.jpg', 'I LOVE LAMP', 24.24, 100, 1),
('weird lamp', 'https://i.imgur.com/ciQTbLJ.jpg', 'interesting....', 50.50, 20, 2),
('hat', 'https://i.imgur.com/GuPonJS.jpg', 'Santas favouite', 5.00, 20, 1),
('sad car', 'https://i.imgur.com/fxzyWTi.jpg', 'looks a little down', 1000.00, 1, 3),
('Nice cat', 'https://i.imgur.com/wYTCtRu.jpg', 'The nicest of cats', 200.00, 1, 1),
('Awkward Spoons', 'https://i.imgur.com/Zyfkk7B.jpeg', 'Not super comfy in the hands but look good!', 50.00, 30, 2),
('Game of Codes', 'https://i.imgur.com/E7gNfYa.jpg', 'I wonder why my e key is stuck', 100.00, 1, 1),
('Zelda', 'https://i.imgur.com/HPEwq3C.jpg', 'Tri-Force', 49.99, 5, 1),
('Bed', 'https://i.imgur.com/ImJxCAJ.jpg', 'Super Comfy', 100.00, 1, 1);