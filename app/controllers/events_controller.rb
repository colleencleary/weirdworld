class EventsController < ApplicationController

skip_before_action :verify_authenticity_token
  def index
    render json: Event.all
  end

  def show
    render json: Event.find(params["id"])
  end

  def create
    render json: Event.create(params["event"])
  end

  def delete
    render json: Event.delete(params["id"])
  end

  def update
    render json: Event.update(params["id"], params["event"])
  end

end #end Companies Controller
