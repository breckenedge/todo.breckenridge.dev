module DatepickerHelper
  def datepicker_input(builder, field)
    content_tag(:div, class: 'input datepicker') do
      safe_join([
        builder.label(field),
        builder.hidden_field(field),
        content_tag(:div, '', class: 'outlet')
      ])
    end
  end
end
