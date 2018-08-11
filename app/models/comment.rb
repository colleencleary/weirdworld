class Comment
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end

# Get All
  def self.all
     results = DB.exec("SELECT * FROM comments")
  end

# Get One by ID
  def self.find(id)
    results = DB.exec("SELECT * FROM comments WHERE id = #{id};")
  end

# Post/ Create New
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO comments (content, username, attraction_id)
        VALUES ('#{opts["content"]}','#{opts["username"]}', #{opts["attraction_id"]})
        RETURNING id, content, username, attraction_id;
      SQL
    )
  end

# Delete by ID
  def self.delete (id)
    results = DB.exec("DELETE FROM comments WHERE id=#{id};")
    return { deleted: true }
  end

# Update/Put by ID
  def self.update (id, opts)
    results = DB.exec(
      <<-SQL
      UPDATE comments
      SET content = '#{opts["content"]}', username='#{opts["username"]}', attraction_id=#{opts["attraction_id"]}
      WHERE id = #{id}
      RETURNING id, content, username, attraction_id;
      SQL
    )
  end

end #end comment class
