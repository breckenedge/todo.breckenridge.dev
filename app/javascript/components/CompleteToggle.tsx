import React, { useContext, useEffect, useState } from "react"

interface CompleteToggleI {
  status: "complete" | "incomplete"
  onClick: () => void
}

const CompleteToggle = ({ status, onClick }: CompleteToggleI): React.ReactElement => {
  return (
    <div>
      <input
        type="checkbox"
        checked={status === "complete"}
        onChange={onClick}
      />
    </div>
  )
}

export default CompleteToggle
