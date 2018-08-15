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

INSERT INTO attractions (name, description, submitted_by, image, city, country, website, tags, rating) VALUES ('The Mutter Museum', 'medical curiosities', 'Philly Phil','https://orion-uploads.openroadmedia.com/lg_0c126a1eb90f-mutter-museum_featured.jpg', 'Philadelphia', 'United States', 'http://muttermuseum.org/about/', '{0}', '4.5');


INSERT INTO attractions (name, description, submitted_by, image, city, country, website, tags, rating) VALUES ('Trans-Allegheny Lunatic Asylum', 'The Trans-Allegheny Lunatic Asylum, later called Weston State Hospital, is an inactive hospital and sanctuary for the mentally ill that was in operation between 1864 and 1994. The hospital soon suffered from overcrowding and poor sanitation. Patients that could not be controlled were often locked in cages. Due to the real suffering experienced by people who lived and were treated at the facility — and due to reports of strange sights, voices, and events — many believe the building to be haunted. The facility now hosts overnight ghost tours, which run for $100.', 'SouthernSarah','http://trans-alleghenylunaticasylum.com/pagegraphics/hsB.jpg', 'Weston, WV', 'United States', 'http://trans-alleghenylunaticasylum.com/', '{0}', '4.5');



CREATE TABLE comments (id SERIAL, content TEXT, username VARCHAR(25), attraction_id INT, date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

INSERT INTO comments (content, username, attraction_id, date) VALUES ('Coney Island was more fun than I could have thought!', 'acroak', 1);

INSERT INTO comments (content, username, attraction_id) VALUES ('Not only does coney island have a lot of venues, they have a mermaid parade!', 'merBAE', 1);

INSERT INTO comments (content, username, attraction_id) VALUES ('They got a lot of really great creepy things in jars', 'stuffinjars', 2);

CREATE TABLE tags(id SERIAL, term VARCHAR(25));


INSERT INTO tags (term) VALUES ('adults-only');
INSERT INTO tags (term) VALUES ('theatre');
INSERT INTO tags (term) VALUES ('music');
INSERT INTO tags (term) VALUES ('creepy');
INSERT INTO tags (term) VALUES ('comics');
INSERT INTO tags (term) VALUES ('boardwalk');
INSERT INTO tags (term) VALUES ('adventure');
INSERT INTO tags (term) VALUES ('tour');
INSERT INTO tags (term) VALUES ('themed');
INSERT INTO tags (term) VALUES ('food');
INSERT INTO tags (term) VALUES ('alcohol');
INSERT INTO tags (term) VALUES ('kid-friendly');
