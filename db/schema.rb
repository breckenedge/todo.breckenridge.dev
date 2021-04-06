# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_06_172649) do

  create_table "projects", id: :string, force: :cascade do |t|
    t.string "name", null: false
    t.date "due_date"
    t.integer "status", default: 0, null: false
    t.text "details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "todo_status_changes", id: :string, force: :cascade do |t|
    t.string "todo_id", null: false
    t.integer "status", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["todo_id"], name: "index_todo_status_changes_on_todo_id"
  end

  create_table "todos", id: :string, force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.date "due_on"
    t.integer "priority"
    t.integer "status", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "project_id"
    t.index ["project_id"], name: "index_todos_on_project_id"
  end

  create_table "users", id: :string, force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "time_zone", default: "Etc/UTC", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "todo_status_changes", "todos", on_delete: :cascade
  add_foreign_key "todos", "projects"
end
