class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.new(
      body: data['body'],
      user_id: data['user_id'],
      messaged_type: data['messaged_type'],
      messaged_id: data['messaged_id']
    )
    if message.save
      socket = { message: message.body, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    messages = Message.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end
end