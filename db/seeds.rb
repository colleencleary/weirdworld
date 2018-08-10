# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CREATE TABLE attractions (id SERIAL, name VARCHAR(255), description TEXT, submitted_by VARCHAR(25) DEFAULT 'anonymous', image TEXT, city TEXT, country TEXT, website TEXT, tags INT ARRAY, rating VARCHAR(20) DEFAULT 'not yet rated');

INSERT INTO attractions (name, description, submitted_by, image, city, country, website, tags, rating) VALUES ();

INSERT INTO attractions (name, description, submitted_by, image, city, country, website, tags, rating) VALUES ('Coney Island', 'Freakshows and boardwalks and bars and mermaids and famous hotdogs!', 'Brooklyn Bob', 'https://www.coneyisland.com/sites/default/files/styles/large/public/mariebanner17%20%281%29.jpg?itok=f59CsYDi', 'New York City', 'United States', 'https://www.coneyisland.com/', '{0}', '4.5');



CREATE TABLE comments (id SERIAL, comment TEXT, username VARCHAR(25), attraction_id INT);

INSERT INTO comments (comment, username, attraction_id) VALUES ('Coney Island was more fun than I could have thought!', 'acroak', 1);

CREATE TABLE tags(id SERIAL, tag VARCHAR(25));

INSERT INTO tags (tag) VALUES ('freakshow');
INSERT INTO tags (tag) VALUES ('burlesque');
INSERT INTO tags (tag) VALUES ('theatre');
INSERT INTO tags (tag) VALUES ('dance');
INSERT INTO tags (tag) VALUES ('comedy');
INSERT INTO tags (tag) VALUES ('music');
INSERT INTO tags (tag) VALUES ('scary');
INSERT INTO tags (tag) VALUES ('creepy');
INSERT INTO tags (tag) VALUES ('murder');
INSERT INTO tags (tag) VALUES ('fun');
INSERT INTO tags (tag) VALUES ('death');
INSERT INTO tags (tag) VALUES ('mermaids');
INSERT INTO tags (tag) VALUES ('comics');
INSERT INTO tags (tag) VALUES ('graveyard');
INSERT INTO tags (tag) VALUES ('crazy');
INSERT INTO tags (tag) VALUES ('wild');
INSERT INTO tags (tag) VALUES ('boardwalk');
INSERT INTO tags (tag) VALUES ('nightlife');
INSERT INTO tags (tag) VALUES ('bar');
INSERT INTO tags (tag) VALUES ('careful after dark');
INSERT INTO tags (tag) VALUES ('carnival');
INSERT INTO tags (tag) VALUES ('adventure');
INSERT INTO tags (tag) VALUES ('tour');
INSERT INTO tags (tag) VALUES ('exciting');
INSERT INTO tags (tag) VALUES ('themed');
INSERT INTO tags (tag) VALUES ('limited');
INSERT INTO tags (tag) VALUES ('gothic');
INSERT INTO tags (tag) VALUES ('exclusive');
INSERT INTO tags (tag) VALUES ('food');
INSERT INTO tags (tag) VALUES ('beer');
INSERT INTO tags (tag) VALUES ('mixed drinks');
INSERT INTO tags (tag) VALUES ('alcohol');
INSERT INTO tags (tag) VALUES ('kid friendly');
INSERT INTO tags (tag) VALUES ('summer');
INSERT INTO tags (tag) VALUES ('indoors');
INSERT INTO tags (tag) VALUES ('outdoors');
INSERT INTO tags (tag) VALUES ('costume');
INSERT INTO tags (tag) VALUES ('yolo');
