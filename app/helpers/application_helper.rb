module ApplicationHelper
  def linkify_text(text)
    text.split("\n").map do |line|
      line.split(' ').map do |word|
        if word.start_with?(%r{https?://})
          link_to(word, word)
        else
          word
        end
      end.join(' ')
    end.join("\n")
  end
end
