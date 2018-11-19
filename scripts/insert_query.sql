-- INSERT INTO TEST (order_id)
-- VALUES (1);

-- SELECT *
-- FROM TEST;

-- INSERT INTO ORDERS (order_id, customer_id, customer_first_name, customer_last_name, customer_street_address, customer_state, customer_zip, purchase_status, product_id, product_name, purchase_amount, purchase_timestamp)
-- VALUES (2, "1", "Snake", "Plisken", "Fake St.", "AZ", "12345", "new", "432", "Masthead", 100.12, "2007-04-05 14:30:00");

SELECT *
FROM ORDERS;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql1234';

-- DELETE FROM ORDERS WHERE order_id = 2;
-- SET SQL_SAFE_UPDATES = 0;
-- DELETE FROM ORDERS;

-- SELECT *
-- FROM USERS;