module EstimatesHelper
  def estimate_breadcrumb(estimate)
    return unless estimate.project.present?

    content_tag(:div, class: "project-breadcrumb") do
      link_to project_path(estimate.project) do
        safe_join(["←", estimate.project.name], " ")
      end
    end
  end
end
