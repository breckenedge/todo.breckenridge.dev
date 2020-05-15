module EstimatesHelper
  def estimate_breadcrumb(estimate)
    return if estimate.project.blank?

    content_tag(:div, class: "navigate-back") do
      link_to project_path(estimate.project) do
        safe_join(["←", estimate.project.name], " ")
      end
    end
  end
end
