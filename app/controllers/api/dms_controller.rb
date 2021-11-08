class Api::DmsController < ApplicationController
  def index
    @dms = current_user.dms
    render 'api/dms/index'
  end

  def show
    @dm = current_user.dms.includes(:members).find_by(id: params[:id])
    render 'api/dms/show'
  end

  def destroy
    @dm = Dm.find_by(id: params[:id])

    if @dm.destroy
      render 'api/dms/show'
    end
  end
end