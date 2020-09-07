module Types
  class TodoType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :description, String, null: true
    field :due_on, GraphQL::Types::ISO8601Date, null: true
    field :priority, Integer, null: true
    field :status, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :project_id, Integer, null: true
    field :project, Types::ProjectType, null: true
  end
end
