import React, { useEffect, useState } from "react"
import SelectInput from "components/SelectInput"
import sortBy from "utilities/sortBy"
import AppCache from "components/AppCache"

const ProjectSelect = ({ id, label, ...rest }) => {
  const [projectOptions, setProjectOptions] = useState([])

  const { projects } = AppCache.useContainer()

  useEffect(() => {
    setProjectOptions(projects)
  }, [projects])

  const options = projectOptions.sort(sortBy('name')).map((p) => ({ value: p.id, label: p.name }))

  return (
    <SelectInput
      id={id}
      label={label}
      options={options}
      {...rest}
    />
  )
}

export default ProjectSelect
