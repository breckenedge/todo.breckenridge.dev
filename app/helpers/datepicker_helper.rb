module DatepickerHelper
  def datepicker_input(builder, field)
    tag.div(class: "input datepicker") do
      safe_join([
                  builder.label(field),
                  builder.hidden_field(field),
                  tag.div("", class: "outlet")
                ])
    end
  end
end
