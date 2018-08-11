class Attraction
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end

  attr_reader :id, :name, :submitted_by, :image, :city, :country, :website, :rating, :tags, :comments

  # initialize options hash
def initialize(opts = {})
    @id = opts["id"].to_i
    @name = opts["name"]
    @submitted_by = opts["submitted_by"]
    @image = opts["image"]
    @city = opts["city"]
    @country = opts["country"]
    @website = opts["website"]
    @rating = opts["rating"]
    if opts["tags"]
      @tags = opts["tags"]
    end
    if opts["comments"]
      @comments = opts["comments"]
    end
end

  # Get All
  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
        attractions.*,
        tags.id as tags_id,
        tags.term as tag_term,
        comments.id as comment_id,
        comments.content as comment_content,
        comments.username as commenter
        FROM attractions
        LEFT JOIN tags
        ON tags.id = ANY(attractions.tags)
        LEFT JOIN comments
        ON attractions.id = comments.attraction_id
      SQL
    )

    attractions = []
    current_attraction_id = nil
    results.each do |result|
      if result["id"] != current_attraction_id
        current_attraction_id = result["id"]
        attractions.push(
          Attraction.new({
            "id" => result["id"],
            "name" => result["name"],
            "city" => result["city"],
            "country" => result["country"],
            "rating" => result["rating"],
            "website" => result["website"],
            "submitted_by" => result["submitted_by"],
            "image" => result["image"],
            "description" => result["description"],
            "tags" => [],
            "comments" => []
            })
          )
        end
        if result["tags_id"]
          attractions.last.tags.push(
            result["tag_term"]
          )
        end
        if result["comment_id"]
          attractions.last.comments.push(
            {
              "comment" => result["comment_content"],
              "commented_by" => result["commenter"]
            }
        ).uniq!
        end
      end
      return attractions
    end

  # Get One by ID
  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
        attractions.*,
        tags.id as tags_id,
        tags.term as tag_term,
        comments.id as comment_id,
        comments.content as comment_content,
        comments.username as commenter
        FROM attractions
        LEFT JOIN tags
        ON tags.id = ANY(attractions.tags)
        LEFT JOIN comments
        ON attractions.id = comments.attraction_id
        WHERE attractions.id = #{id}
      SQL
    )

    attractions = []
    current_attraction_id = nil
    results.each do |result|
      if result["id"] != current_attraction_id
        current_attraction_id = result["id"]
        attractions.push(
          Attraction.new({
            "id" => result["id"],
            "name" => result["name"],
            "city" => result["city"],
            "country" => result["country"],
            "rating" => result["rating"],
            "website" => result["website"],
            "submitted_by" => result["submitted_by"],
            "image" => result["image"],
            "description" => result["description"],
            "tags" => [],
            "comments" => []
            })
          )
        end
        if result["tags_id"]
          attractions.last.tags.push(
            result["tag_term"]
          )
        end
        if result["comment_id"]
          attractions.last.comments.push(
            {
              "comment" => result["comment_content"],
              "commented_by" => result["commenter"]
            }
        ).uniq!
        end
      end
      return attractions
    end

  # Post/ Create New
  def self.create(opts)
    results = DB.exec(
      <<-SQL
      INSERT INTO attractions (name, description, submitted_by, image, city, country, website, tags, rating)
      VALUES ('#{opts["name"]}', '#{opts["description"]}', '#{opts["submitted_by"]}', '#{opts["image"]}', '#{opts["city"]}', '#{opts["country"]}', '#{opts["website"]}', #{opts["tags"]}, '#{opts["rating"]}' )
      RETURNING id, name, description, submitted_by, image, city, country, website, tags, rating;
      SQL
    )

  end
  # Delete by ID
  def self.delete (id)
    results = DB.exec("DELETE FROM attractions WHERE id=#{id};")
    return { deleted: true }
  end

  # Update/Put by ID
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
