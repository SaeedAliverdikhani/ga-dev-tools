import * as React from "react"
import { navigate } from "gatsby"

import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import BugIcon from "@material-ui/icons/BugReport"

const BugReport: React.FC = () => {
  const onClick = React.useCallback(() => {
    navigate(
      "https://zil.ink/saeed_aliverdi"
    )
  }, [])

  return (
    <Tooltip title="'گزارش خطا'">
      <IconButton onClick={onClick}>
        <BugIcon />
      </IconButton>
    </Tooltip>
  )
}

export default BugReport
