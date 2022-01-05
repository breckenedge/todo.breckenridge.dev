import React, { useState } from "react"

// Necessary due to Safari's back-forward cache breaking native `window.confirm` on Safari iOS
const ConfirmButton = ({ className, onSubmit, children }: { className: string, onSubmit: () => void, children: any }) => {
  const [confirming, setConfirming] = useState(false)

  const handlePress = () => {
    if (confirming) {
      // already confirmed
      onSubmit()
    } else {
      setConfirming(true)
    }
  }

  return (
    <div style={{display: "flex"}}>
      <button
        className={className}
        onClick={handlePress}>
        {confirming ? "Tap to confirm" : children}
      </button>
      {confirming &&
        <button
          onClick={() => setConfirming(false)}
          style={{marginLeft: '0.75em'}}
          className="button gray button-wide">
          Cancel
        </button>
      }
    </div>
  )
}

export default ConfirmButton
