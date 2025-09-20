class PropertiesController < ApplicationController
  def index
    @properties = Property.includes(photos: { image_attachment: :blob }).all
  end

  def show
    @property = Property.find(params[:id])
  end
end
