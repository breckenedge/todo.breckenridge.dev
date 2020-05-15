module ApplicationHelper
  def simple_text(text)
    simple_format(linkify_text(text), {}, wrapper_tag: "div")
  end

  def linkify_text(text)
    text.split("\n").map do |line|
      line.split(" ").map do |word|
        if word.start_with?(%r{https?://})
          link_to(word, word)
        else
          word
        end
      end.join(" ")
    end.join("\n")
  end

  def due_date_badge(due_date)
    return if due_date.blank?

    content_tag(:span, class: "badge") do
      pluralize (due_date - Date.current).to_i, "day"
    end
  end
end
