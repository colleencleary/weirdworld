class Event
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'weirdworld_development')
  end

  attr_reader :id, :name, :description, :image, :city, :country, :website


  # initialize options hash
def initialize(opts = {})
    @id = opts["id"].to_i
    @name = opts["name"]
    @description = opts["description"]
    @image = opts["image"]
    @city = opts["city"]
    @country = opts["country"]
    @website = opts["website"]
end

  # Get All
  def self.all
    results = DB.exec(

    events = []
    current_event_id = nil
    results.each do |result|
      if result["id"] != current_event_id
        current_event_id = result["id"]
        events.push(
          Event.new({
            "id" => result["id"],
            "name" => result["name"],
            "city" => result["city"],
            "country" => result["country"],
            "website" => result["website"],
            "image" => result["image"],
            "description" => result["description"]
            })
          )
        end
      end
      return events
    end

  # Get One by ID
  def self.find(id)
    results = DB.exec(

    events = []
    current_event_id = nil
    results.each do |result|
      if result["id"] != current_event_id
        current_event_id = result["id"]
        events.push(
          Event.new({
            "id" => result["id"],
            "name" => result["name"],
            "city" => result["city"],
            "country" => result["country"],
            "website" => result["website"],
            "image" => result["image"],
            "description" => result["description"]
            # "tags" => [],
            # "comments" => []
            })
          )
        end

      end
      return events
    end

  # Post/ Create New
  def self.create(opts)
    results = DB.exec(
      <<-SQL
      INSERT INTO events (name, description, image, city, country, website)
      VALUES ('#{opts["name"]}', '#{opts["description"]}', '#{opts["image"]}', '#{opts["city"]}', '#{opts["country"]}', '#{opts["website"]}')
      RETURNING id, name, description, image, city, country, website;
      SQL
    )

  end
  # Delete by ID
  def self.delete (id)
    results = DB.exec("DELETE FROM events WHERE id=#{id};")
    return { deleted: true }
  end

  # Update/Put by ID
  def self.update (id, opts)
    results = DB.exec(
      <<-SQL
      UPDATE events
      SET name ='#{opts["name"]}', description='#{opts["description"]}', image='#{opts["image"]}', city= '#{opts["city"]}', country= '#{opts["country"]}', website= '#{opts["website"]}'
      WHERE id = #{id}
      RETURNING id, name, description, image, city, country, website;
      SQL
    )
  end

end #end event class
