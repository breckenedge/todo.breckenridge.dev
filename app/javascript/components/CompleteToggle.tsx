import React, { useContext, useEffect, useState } from "react"

interface CompleteToggleI {
  status: "complete" | "incomplete"
  onClick: () => void
}

const CompleteToggle = ({ status, onClick }: CompleteToggleI): React.ReactElement => {
  return (
    <button
      className={`complete-toggle ${status}`}
      type="button"
      onClick={onClick}
    >
      { status === "complete" ? "✅" : "🔲" }
    </button>
  )
}

export default CompleteToggle
