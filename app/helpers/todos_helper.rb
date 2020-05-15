module TodosHelper
  def todo_priority(todo)
    return if todo.priority.blank?

    content_tag :span, todo.priority, class: "badge"
  end

  def complete_toggle(todo)
    url = if todo.complete?
            incomplete_todo_path(todo, return_to: request.path)
          else
            complete_todo_path(todo, return_to: request.path)
          end
    icon = todo.complete? ? incomplete_icon : complete_icon
    link_to content_tag(:div, icon, class: "icon"), url, class: "complete-toggle", method: :post
  end

  def todo_breadcrumb(todo)
    link_text = todo.project.present? ? todo.project.name : "Back to list"
    link_url = todo.project.present? ? project_path(todo.project) : todos_path

    content_tag(:div, class: "navigate-back") do
      link_to link_url do
        safe_join(["←", link_text], " ")
      end
    end
  end
end
