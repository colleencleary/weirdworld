class Tag
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end
  
# Get All
  def self.all
     results = DB.exec("SELECT * FROM tags")
  end
# Get One by ID
  def self.find(id)
    results = DB.exec("SELECT * FROM tags WHERE id = #{id};")
  end

# Post/ Create New
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO tags (tag)
        VALUES ('#{opts["tag"]}')
        RETURNING id, tag;
      SQL
    )
  end

# Delete by ID
  def self.delete (id)
    results = DB.exec("DELETE FROM tags WHERE id=#{id};")
    return { deleted: true }
  end

# Update/Put by ID
  def self.update (id, opts)
    results = DB.exec(
      <<-SQL
      UPDATE tags
      SET tag = '#{opts["tag"]}'
      WHERE id = #{id}
      RETURNING id, tag;
      SQL
    )
  end

end #end tag class
