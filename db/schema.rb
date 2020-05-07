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

ActiveRecord::Schema.define(version: 2020_05_07_031708) do

  create_table "project_estimates", force: :cascade do |t|
    t.integer "project_id", null: false
    t.date "date"
    t.string "vendor"
    t.string "contact"
    t.string "phone"
    t.string "estimate"
    t.text "details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_project_estimates_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.date "due_date"
    t.integer "status", default: 0
    t.text "details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "todo_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "todo_category_todos", force: :cascade do |t|
    t.integer "todo_id", null: false
    t.integer "todo_category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["todo_category_id"], name: "index_todo_category_todos_on_todo_category_id"
    t.index ["todo_id"], name: "index_todo_category_todos_on_todo_id"
  end

  create_table "todos", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.date "due_on"
    t.integer "priority"
    t.integer "status"
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
  end

  add_foreign_key "project_estimates", "projects"
  add_foreign_key "todo_category_todos", "todo_categories"
  add_foreign_key "todo_category_todos", "todos"
  add_foreign_key "todos", "projects"
end
