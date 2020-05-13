module TodosHelper
  def todo_due_on(todo)
    return unless todo.due_on.present?

    content_tag :span, time_ago_in_words(todo.due_on), class: "badge badge-info"
  end

  def todo_priority(todo)
    return unless todo.priority.present?

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
    return unless todo.project.present?

    content_tag(:div, class: "project-breadcrumb") do
      link_to project_path(todo.project) do
        safe_join(["←", todo.project.name], " ")
      end
    end
  end
end
