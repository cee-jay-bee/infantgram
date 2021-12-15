
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "classroom" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "role" VARCHAR (10) NOT NULL,
    "classroom_id" INT REFERENCES "classroom"  
);

CREATE TABLE "child" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(25) NOT NULL,
    "last_name" VARCHAR (25) NOT NULL,
    "parent_id" INT REFERENCES "user" NOT NULL,
    "classroom_id" INT REFERENCES "classroom" NOT NULL,
    "image_path" VARCHAR (255) NOT NULL,
    "birth_date" DATE NOT NULL,
    "allergies" VARCHAR (1000) NOT NULL
);

CREATE TABLE "daily_forms" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "wakeup" TIME NOT NULL,
    "child_id" INT REFERENCES "child" NOT NULL,
    "breakfast" TIME NOT NULL,
    "breakfast_food" VARCHAR(1000) NOT NULL,
    "parent_comments" VARCHAR(1000),
    "diaper_change_time" TIME NOT NULL,
    "pickup_time" TIME NOT NULL,
    "bottles" VARCHAR(1000) NOT NULL,
    "naps" VARCHAR (1000) NOT NULL,
    "diapers" VARCHAR (1000) NOT NULL,
    "needs" VARCHAR (1000) NOT NULL,
    "feelings" VARCHAR (1000) NOT NULL,
    "teacher_comments" VARCHAR (1000)
);