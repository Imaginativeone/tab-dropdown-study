import { useEffect, useRef, useState } from "react"
import { DropDownList } from '@progress/kendo-react-dropdowns'
import controlsObject from "./helperFunctions/controlsObject"

const DropDownListCollection = ({ controls, setControls,ctrlArray, setCtrlArray, ctrlArrayRef, selectedTab, selectedGrid, filters, setFilters, controlInitialSelections }) => {

  useEffect(() => {
    // console.log('controls', controls)
    initialFilterSelection(controls)
    // handleFilterSelection(controls)
  }, [])

  useEffect(() => {
    console.log('SET THE CONTROLS');
    // console.log('controls', controls)
    handleFilterSelection(controls)
  }, [selectedGrid])

  const initialFilterSelection = (controls:any) => {
    const filters = controls.filter
    console.log('INITIAL FILTER SELECTION', controls)
  }

  const handleFilterSelection = (event: any) => { // handleOptionSelection?
    if (!event.value) { // && using the correct controls

      console.log('Initial CONTROL STATE', event, controls) // ******************** Current Development ********************

      // console.log('INITIAL: handleFilterSelection: event', event)
      // const filters = event.filter
      // console.log('Local Filters', filters)
      // setFilters(filters)
    }
    else {
      console.log('If selectedGrid changes, then RESET THE CONTROLS');
      console.log('SUBSEQUENT: handleFilterSelection: event', event); console.log(event.value)
      const filters = event.value.filter
      // console.log('Local Filters', filters)
      // setFilters(filters)
    }
  }

  return (
    <>
      {
        controls.gridControls.map((element: any, index: any) => {
        // ctrlArray.map((element: any, index: any) => {
        // ctrlArrayRef.current.gridControls.map((element: any, index: any) => {
          return (
            <div key={index}>
              <div>
                {element.apiDropdownLabel}
              </div>
              <DropDownList data={element.apiDropdownControls} textField="text" dataItemKey="id" defaultValue={element.apiDropdownDefaultValue} onChange={handleFilterSelection} />
            </div>
          )
        })
      }
    </>
  )
}

export default DropDownListCollection

function getControlDefaultValues(ctrlArray: any) {
  return ctrlArray.map((ctrlSet) => {
    const defaultSelection = ctrlSet.apiDropdownControls.filter((potentialDefault: any) => {
      if (potentialDefault.defaultValue) {
        return potentialDefault
      }
    })
    return { ...ctrlSet, apiDropdownDefaultValue: defaultSelection[0] }
  })
}
