module NavigationHelper
  def navigation
    safe_join([
      link_to('Projects', projects_path, id: 'projects-link', class: ('active' if project_active?)),
      link_to('Todos', todos_path, id: 'todos-link', class: ('active' if todos_active?)),
      link_to('Categories', todo_categories_path, id: 'categories-link', class: ('active' if categories_active?)),
      link_to('⚙', profile_path, id: 'profile-link', class: ('active' if profile_active?)),
      content_tag(:div, '', style: 'flex-grow: 1'),
      link_to('🔍', search_path, id: 'search-link', class: ('active' if search_active?))
    ])
  end

  def categories_active?
    controller_name == 'todo_categories'
  end

  def profile_active?
    controller_name == 'profiles'
  end

  def project_active?
    controller_name == 'projects'
  end

  def todos_active?
    controller_name == 'todos'
  end

  def search_active?
    controller_name == 'search'
  end
end
