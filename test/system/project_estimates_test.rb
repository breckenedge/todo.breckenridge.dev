require "application_system_test_case"

class ProjectEstimatesTest < ApplicationSystemTestCase
  setup do
    @project_estimate = project_estimates(:one)
  end

  test "visiting the index" do
    visit project_estimates_url
    assert_selector "h1", text: "Project Estimates"
  end

  test "creating a Project estimate" do
    visit project_estimates_url
    click_on "New Project Estimate"

    fill_in "Contact", with: @project_estimate.contact
    fill_in "Phone", with: @project_estimate.phone
    fill_in "Project", with: @project_estimate.project_id
    fill_in "Vendor", with: @project_estimate.vendor
    click_on "Create Project estimate"

    assert_text "Project estimate was successfully created"
    click_on "Back"
  end

  test "updating a Project estimate" do
    visit project_estimates_url
    click_on "Edit", match: :first

    fill_in "Contact", with: @project_estimate.contact
    fill_in "Phone", with: @project_estimate.phone
    fill_in "Project", with: @project_estimate.project_id
    fill_in "Vendor", with: @project_estimate.vendor
    click_on "Update Project estimate"

    assert_text "Project estimate was successfully updated"
    click_on "Back"
  end

  test "destroying a Project estimate" do
    visit project_estimates_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Project estimate was successfully destroyed"
  end
end
