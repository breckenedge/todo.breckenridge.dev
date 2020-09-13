# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_13_175025) do

  create_table "api_keys", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "api_key", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_api_keys_on_user_id"
  end

  create_table "estimates", force: :cascade do |t|
    t.integer "project_id", null: false
    t.date "date"
    t.string "vendor"
    t.string "contact"
    t.string "phone"
    t.string "estimate"
    t.text "details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_estimates_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.date "due_date"
    t.integer "status", default: 0, null: false
    t.text "details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "estimates_enabled", default: false, null: false
  end

  create_table "todo_status_changes", force: :cascade do |t|
    t.integer "todo_id", null: false
    t.integer "status", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["todo_id"], name: "index_todo_status_changes_on_todo_id"
  end

  create_table "todos", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.date "due_on"
    t.integer "priority"
    t.integer "status", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "project_id"
    t.index ["project_id"], name: "index_todos_on_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "time_zone", default: "Etc/UTC", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "api_keys", "users", on_delete: :cascade
  add_foreign_key "estimates", "projects"
  add_foreign_key "todo_status_changes", "todos", on_delete: :cascade
  add_foreign_key "todos", "projects"
end
