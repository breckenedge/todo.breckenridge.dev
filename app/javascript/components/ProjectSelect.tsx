import React, { useEffect, useState } from "react"
import SelectInput from "components/SelectInput"
import { fetchProjects } from "repos/ProjectsRepo"
import sortBy from "utilities/sortBy"

const ProjectSelect = ({ id, label, ...rest }) => {
  const [projectOptions, setProjectOptions] = useState([])

  useEffect(() => {
    fetchProjects().then(setProjectOptions)
  }, [])

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
