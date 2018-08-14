class AttractionsController < ApplicationController

skip_before_action :verify_authenticity_token
  def index
    render json: Attraction.all
  end

  def show
    render json: Attraction.find(params["id"])
  end

  def create
    render json: Attraction.create(params["attraction"])
  end

  def delete
    render json: Attraction.delete(params["id"])
  end

  def update
    render json: Attraction.update(params["id"], params["attraction"])
  end

end #end Companies Controller
