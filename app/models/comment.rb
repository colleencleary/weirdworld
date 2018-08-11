class Comment
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end

def self.all
   results = DB.exec("SELECT * FROM comments")
end

def self.find(id)
  results = DB.exec("SELECT * FROM comments WHERE id = #{id};")
end

def self.create(opts)
  results = DB.exec(
    <<-SQL
      INSERT INTO comments (comment, username, attraction_id)
      VALUES ('#{opts["comment"]}','#{opts["username"]}', #{opts["attraction_id"]})
      RETURNING id, comment, username, attraction_id;
    SQL
  )
end

def self.delete (id)
  results = DB.exec("DELETE FROM comments WHERE id=#{id};")
  return { deleted: true }
end

def self.update (id, opts)
  results = DB.exec(
    <<-SQL
    UPDATE comments
    SET name ='#{opts["name"]}', description='#{opts["description"]}', submitted_by='#{opts["submitted_by"]}', image='#{opts["image"]}', city= '#{opts["city"]}', country= '#{opts["country"]}', website= '#{opts["website"]}', rating='#{opts["rating"]}'
    WHERE id = #{id}
    RETURNING id, name, description, submitted_by, image, city, country, website, rating;
    SQL
  )
end

end #end comment class
