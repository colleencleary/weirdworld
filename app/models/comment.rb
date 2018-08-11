class Comment
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end

  def self.all
    results = DB.exec(
      <<-SQL
      SELECT * FROM comments;
      SQL
    )
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
      SELECT * FROM comments
      where id=#{id};
      SQL
    )
  end

  def self.create(opts)
    results = DB.exec()
  end

  def self.delete (id)
    results = DB.exec()
  end

  def self.update (id, opts)
    results = DB.exec()
  end

end #end comment class
