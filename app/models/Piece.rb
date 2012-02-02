Class Piece

  attr_accessor :row, :column  

  def location
    location = { :row => self.row, :column => self.column }
  end

end
