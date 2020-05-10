module TodosHelper
  def todo_due_on(todo)
    if todo.due_on
      content_tag :span, time_ago_in_words(todo.due_on), class: 'badge badge-info'
    end
  end

  def todo_priority(todo)
    if todo.priority
      content_tag :span, todo.priority, class: "badge"
    end
  end
end
