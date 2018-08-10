class TagsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    render json: Tag.all
  end

  def show
    render json: Tag.find(params["id"])
  end

  def create
    render json: Tag.create(params["tag"])
  end

  def delete
    render json: Tag.delete(params["id"])
  end

  def update
    render json: Tag.update(params["id"], params["tag"])
  end

end #end Tags Controller
