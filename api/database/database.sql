CREATE DATABASE postsapi;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    description VARCHAR(200) NOT NULL,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts(name, description) VALUES ('Post 1', 'Description 1');