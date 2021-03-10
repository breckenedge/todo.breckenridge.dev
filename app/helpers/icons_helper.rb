module IconsHelper
  def complete_icon
    "✓"
  end

  def complete_icon_for(item)
    tag.span(complete_icon, class: "teal") if item.complete?
  end

  def incomplete_icon
    "×"
  end
end
