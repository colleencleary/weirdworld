class Comment
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end

  # attr_reader :id, :content, :username, :attraction_id
  #
  # def initialize(opts = {})
  #   @id = opts["id"].to_i
  #   @content = opts["content"]
  #   @username = opts["username"]
  #   @attraction_id = opts["attraction_id"].to_i
  # end

# Get All
  def self.all
     results = DB.exec(
       <<-SQL
        SELECT
        comments.* ,
        attractions.id as id_from_attraction,
        attractions.name as attraction_name,
        attractions.description as attraction_decription
        FROM attractions
        LEFT JOIN comments
        ON comments.attraction_id = attractions.id
        ORDER BY comments.attraction_id;
       SQL
     )
     comments = []
     last_attraction_id = nil
    results.each do |result|
      if result["attraction_id"] != last_attraction_id
        comments.push(
          {
            "id"=> result["id"].to_i,
            "content" => result["content"],
            "username" => result["username"],
            "attraction_id" => result["attraction_id"].to_i
          }
        )
        last_attraction_id = result["id"]
      end
    end

  end

# Get One by ID
  # def self.find(id)
  #   results = DB.exec(
  #     <<-SQL
  #     SELECT
  #     comments.* ,
  #     attractions.id as id_from_attraction,
  #     attractions.name as attraction_name,
  #     attractions.description as attraction_decription
  #     FROM attractions
  #     LEFT JOIN comments
  #     ON comments.attraction_id = attractions.id
  #     WHERE comments.attraction_id = #{id};
  #     SQL
  #   )
  #   "id"=> result["id"],
  #   "content" => result["content"],
  #   "username" => result["username"],
  #   "attraction_id" => result["attraction_id"]
  # end
  # Get One by ID
  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          comments.* ,
          attractions.id as id_from_attraction,
          attractions.name as attraction_name,
          attractions.description as attraction_decription
        FROM attractions
        LEFT JOIN comments
        ON comments.attraction_id = attractions.id
        WHERE comments.attraction_id = #{id};
        SQL
    )

    comments = []
    current_attraction_id = nil
    results.each do |result|
      if result["attraction_id"] != current_attraction_id
        current_attraction_id = result["id"]
        comments.push(
          Comment.new({
            "id"=> result["id"].to_i,
            "content" => result["content"],
            "username" => result["username"],
            "attraction_id" => result["attraction_id"].to_i
            })
          )
        end

      end
      return attractions
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

end
# end comment class
