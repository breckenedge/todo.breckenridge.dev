module Types
  class ProjectType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :due_date, GraphQL::Types::ISO8601Date, null: true
    field :status, Integer, null: false
    field :details, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :estimates_enabled, Boolean, null: false
    field :todos, [Types::TodoType], null: true
  end
end
