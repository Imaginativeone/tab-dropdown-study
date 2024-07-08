import { useState, useEffect } from "react"

// CONTROLS
import * as ci from '../../../../Other/DropDownListCollection/helperFunctions/controlsImports' // ci = import controls defaults
const importedControlsArray:any = [
  ci.initialControlsRofo, 
  ci.initialControlsCommission, 
  ci.initialControlsMaintenance,
  ci.initialControlsLeasingStat,
  ci.initialControlsLegal,
  ci.initialControlsPipelineLeaseStats,
  ci.initialControlsCDA,
  ci.initialControlsOccupancy,
  ci.initialControlsGaapTerm,
]

const useFetchControlSet = (selectedTab:any) => {

  const controls = importedControlsArray[selectedTab]; 
  const setControls = function(selectedTab:any) {
    return importedControlsArray[selectedTab]
  }
  // const [controls, setControls] = useState(importedControlsArray[selectedTab])
  
  return {
    controls,
    setControls,
  }
}

export default useFetchControlSet
