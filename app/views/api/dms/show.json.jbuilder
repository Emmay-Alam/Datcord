json.dm do
  json.partial! 'api/dms/dm', dm: @dm
end

json.messages do
  @dm.messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end