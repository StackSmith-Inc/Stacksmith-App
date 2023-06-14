-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- -- SELECT pg_catalog.set_config(‘search_path’, ‘’, false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;
-- -- DROP TABLE IF EXISTS techTable;     --drop table means delete table

-- CREATE TABLE techTable (
--   techName varchar PRIMARY KEY, --primary key in postgres is by default unique
--   techType varchar,
--   techDescription varchar,
--   img varchar
-- );

INSERT INTO techTable VALUES ('React', 'Frontend','React is a JavaScript library for building user interfaces that allows developers to create reusable UI components and efficiently update them when the underlying data changes.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png');

INSERT INTO techTable VALUES ('Angular', 'Frontend','Angular is an open-source web application framework for building dynamic and scalable single-page applications.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png');

INSERT INTO techTable VALUES ('Vue', 'Frontend','Vue.js is a progressive JavaScript framework for building user interfaces, allowing developers to create dynamic and interactive web applications.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png');

INSERT INTO techTable VALUES ('Vue', 'Frontend','Vue.js is a progressive JavaScript framework for building user interfaces, allowing developers to create dynamic and interactive web applications.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png');


INSERT INTO techTable VALUES ('PostgreSQL', 'Database','PostgreSQL is an open-source relational database management system that provides advanced features and scalability for storing and managing structured data.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png');

INSERT INTO techTable VALUES ('mySQL', 'Database','MySQL is an open-source relational database management system that offers a reliable and efficient solution for storing, managing, and retrieving structured data.', 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png');

INSERT INTO techTable VALUES ('mongoDB', 'Database','MongoDB is a popular NoSQL database that provides a flexible and scalable solution for storing and retrieving unstructured and semi-structured data, using a document-oriented approach.', 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png');

INSERT INTO techTable VALUES ('Prisma', 'Database','Prisma is a modern database toolkit that simplifies database access and management by providing an intuitive ORM (Object-Relational Mapping) layer and powerful data modeling capabilities.', 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg');

