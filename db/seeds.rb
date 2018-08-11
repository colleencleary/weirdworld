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



CREATE TABLE comments (id SERIAL, content TEXT, username VARCHAR(25), attraction_id INT);

INSERT INTO comments (content, username, attraction_id) VALUES ('Coney Island was more fun than I could have thought!', 'acroak', 1);

CREATE TABLE tags(id SERIAL, term VARCHAR(25));

INSERT INTO tags (term) VALUES ('freakshow');
INSERT INTO tags (term) VALUES ('burlesque');
INSERT INTO tags (term) VALUES ('theatre');
INSERT INTO tags (term) VALUES ('dance');
INSERT INTO tags (term) VALUES ('comedy');
INSERT INTO tags (term) VALUES ('music');
INSERT INTO tags (term) VALUES ('scary');
INSERT INTO tags (term) VALUES ('creepy');
INSERT INTO tags (term) VALUES ('murder');
INSERT INTO tags (term) VALUES ('fun');
INSERT INTO tags (term) VALUES ('death');
INSERT INTO tags (term) VALUES ('mermaids');
INSERT INTO tags (term) VALUES ('comics');
INSERT INTO tags (term) VALUES ('graveyard');
INSERT INTO tags (term) VALUES ('crazy');
INSERT INTO tags (term) VALUES ('wild');
INSERT INTO tags (term) VALUES ('boardwalk');
INSERT INTO tags (term) VALUES ('nightlife');
INSERT INTO tags (term) VALUES ('bar');
INSERT INTO tags (term) VALUES ('careful after dark');
INSERT INTO tags (term) VALUES ('carnival');
INSERT INTO tags (term) VALUES ('adventure');
INSERT INTO tags (term) VALUES ('tour');
INSERT INTO tags (term) VALUES ('exciting');
INSERT INTO tags (term) VALUES ('themed');
INSERT INTO tags (term) VALUES ('limited');
INSERT INTO tags (term) VALUES ('gothic');
INSERT INTO tags (term) VALUES ('exclusive');
INSERT INTO tags (term) VALUES ('food');
INSERT INTO tags (term) VALUES ('beer');
INSERT INTO tags (term) VALUES ('mixed drinks');
INSERT INTO tags (term) VALUES ('alcohol');
INSERT INTO tags (term) VALUES ('kid friendly');
INSERT INTO tags (term) VALUES ('summer');
INSERT INTO tags (term) VALUES ('indoors');
INSERT INTO tags (term) VALUES ('outdoors');
INSERT INTO tags (term) VALUES ('costume');
INSERT INTO tags (term) VALUES ('yolo');
