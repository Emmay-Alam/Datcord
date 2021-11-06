json.server do
  json.partial! 'api/servers/server', server: @server
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end