<<<<<<< HEAD
class Api::ServersController < ApplicationController
  def index
    @servers = Server.all
    render 'api/servers/index'
  end

  def show
    @server = Server.find(params[:id])
    render 'api/servers/show'
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id

    if @server.save
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])

    if @server.update(server_params)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])

    if @server.destroy
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end
=======
class Api::ServersController < ApplicationController
  def index
    @servers = Server.all
    render 'api/servers/index'
  end

  def show
    @server = Server.find_by(id: params[:id])
    render 'api/servers/show'
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id

    if @server.save
      Channel.create(name: "general", server_id: @server.id)
      Membership.create(user_id: @server.owner_id, membership_type: "Server", membership_id: @server.id)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])

    if @server.update(server_params)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])

    if @server.destroy
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  private

  def server_params
    params.require(:server).permit(:name, :owner_id)
  end
>>>>>>> channel
end