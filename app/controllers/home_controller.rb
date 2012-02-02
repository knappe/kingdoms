class HomeController < ApplicationController
  def index
  end

  def recommendations
    respond_to do | format |
      format.html
      format.json
    end

  end

end
