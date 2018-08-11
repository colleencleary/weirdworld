class Attraction
    # DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')

    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
    end

  def self.all
     results = DB.exec("SELECT * FROM attractions")
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM attractions WHERE id = #{id};")
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO attractions (name, description, submitted_by, image, city, country, website, tags, rating)
        VALUES ('#{opts["name"]}', '#{opts["description"]}', '#{opts["submitted_by"]}', '#{opts["image"]}', '#{opts["city"]}', '#{opts["country"]}', '#{opts["website"]}', #{opts["tags"]}, '#{opts["rating"]}' )
        RETURNING id, name, description, submitted_by, image, city, country, website, tags, rating;
      SQL
    )

  end

  def self.delete (id)
    results = DB.exec("DELETE FROM attractions WHERE id=#{id};")
    return { deleted: true }
  end

  def self.update (id, opts)
    results = DB.exec(
      <<-SQL
      UPDATE attractions
      SET name ='#{opts["name"]}', description='#{opts["description"]}', submitted_by='#{opts["submitted_by"]}', image='#{opts["image"]}', city= '#{opts["city"]}', country= '#{opts["country"]}', website= '#{opts["website"]}', tags=#{opts["tags"]}, rating='#{opts["rating"]}'
      WHERE id = #{id}
      RETURNING id, name, description, submitted_by, image, city, country, website, tags, rating;
      SQL
    )
  end

end #end attraction class
