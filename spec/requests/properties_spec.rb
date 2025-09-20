require 'rails_helper'

RSpec.describe "Properties", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/properties/index"
      expect(response).to have_http_status(:success)
    end
  end

end
