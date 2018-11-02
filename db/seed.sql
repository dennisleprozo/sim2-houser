CREATE TABLE houses
(
        id SERIAL PRIMARY KEY,
        name VARCHAR(30),
        address VARCHAR(100),
        city VARCHAR(100),
        state VARCHAR(2),
        zip INTEGER,
        img TEXT,
        mortgage DECIMAL,
        rent DECIMAL
);

INSERT INTO houses(name, address, city, state, zip, img, mortgage, rent) 
VALUES('Single', '1001 100th St.', 'Provo', 'UT', '84606', 'http://image_url_3', '800', '900');

INSERT INTO houses(name, address, city, state, zip, img, mortgage, rent) 
VALUES('Duplex', '456 E Baker St', 'Salt Lake City', 'UT', '84091', 'http://image_url_6', '900', '900');

INSERT INTO houses(name, address, city, state, zip, img, mortgage, rent) 
VALUES('Double', 'Richfield', 'Salt Lake City', 'UT', '84606', 'http://image_url_7', '800', '900');

SELECT * 
FROM houses;


-- Create this table in SQL Tabs

    -- CREATE TABLE Houses(id SERIAL PRIMARY KEY, name VARCHAR(30), address VARCHAR(100), city VARCHAR(100), state VARCHAR(2), zip INTEGER, img TEXT, mortgage DECIMAL, rent DECIMAL
    -- );  

DELETE FROM  Houses 
WHERE id = $1;