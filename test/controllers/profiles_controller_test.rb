require 'test_helper'

class ProfilesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    log_in_as(users(:one))
    get profile_url
    assert_response :success
  end
end
