class ChatChannel < ApplicationCable::Channel
  def subscribed
    if (params[:type] == "Channel")
      @chat = Channel.find_by(id: params[:id])
    else
      @chat = Dm.find_by(id: params[:id])
    end

    stream_for @chat
  end

  def speak(data)
    @message = Message.new(
      body: data['body'],
      user_id: data['user_id'],
      messaged_type: data['messaged_type'],
      messaged_id: data['messaged_id']
    )

    if @message.save
      socket = { message: message_json, type: 'message' }
      ChatChannel.broadcast_to(@chat, socket)
    end
  end

  def load
    messages = Message.all
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(@chat, socket)
  end

  def unsubscribed; end

  def message_json
    JSON.parse(
      ApplicationController.render(
        partial: 'api/messages/message',
        locals: { message: @message }))
  end
end