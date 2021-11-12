json.extract! user, :id, :email, :username, :tag
json.servers user.servers.map(&:id);