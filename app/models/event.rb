class Event
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end

# Get All
  def self.all
     results = DB.exec("SELECT * FROM events")
  end
# Get One by ID
  def self.find(id)
    results = DB.exec("SELECT * FROM events WHERE id = #{id};")
    return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "description" => results.first["description"].to_i,
        "image" => results.first["image"].to_i,
        "city" => results.first["city"],
        "country" => results.first["country"].to_i,
        "website" => results.first["website"].to_i,
    }
  end

  def self.create(opts)
    results = DB.exec(
        <<-SQL
            INSERT INTO events (name, description, image, city, country, website)
            VALUES ( '#{opts["name"]}', '#{opts["description"]}', '#{opts["image"]}', '#{opts["city"]}', '#{opts["country"]}', '#{opts["website"]}' )
            RETURNING id, name, description, image, city, country, website;
        SQL
    )

  end

  def self.delete(id)
    results = DB.exec("DELETE FROM events WHERE id=#{id};")
    return { "deleted" => true }
  end

end #end tag class
