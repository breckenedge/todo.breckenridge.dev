class Types::QueryType < GraphQL::Schema::Object
  field :project, Types::ProjectType, null: true do
    description "Find a project by ID"
    argument :id, ID, required: true
  end

  field :projects, [Types::ProjectType], null: true do
    description "Get all projects"
  end

  field :todo, Types::TodoType, null: true do
    description "Find a todo by ID"
    argument :id, ID, required: true
  end

  field :todos, [Types::TodoType], null: true do
    description "Get all todos"
  end

  def project(id:)
    Project.find(id)
  end

  def projects
    Project.all
  end

  def todo(id:)
    Todo.find(id)
  end

  def todos
    Todo.all
  end
end
