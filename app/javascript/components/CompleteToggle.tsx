import React, { useContext, useEffect, useState } from "react"

interface CompleteToggleI {
  status: "complete" | "incomplete"
  onClick: () => void
}

const CompleteToggle = ({ status, onClick }: CompleteToggleI): React.ReactElement => (
  <input
    type="checkbox"
    checked={status === "complete"}
    onChange={onClick}
    style={{margin: "1em"}}
  />
)

export default CompleteToggle
