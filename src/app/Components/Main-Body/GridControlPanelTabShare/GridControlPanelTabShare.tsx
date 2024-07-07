'use client'
 
import { useState, useEffect } from 'react'
import TabsGridSelectionComponent from "../TabsGridSelectionComponent/TabsGridSelectionComponent"
 
const GridControlPanelTabShare = (props: any) => { // This component handles the TabsGridSelection to GridControlPanel events
 
  const [selectedGrid, setSelectedGrid] = useState<number>(0)                         // These vars are for selecting the
  const [currGrid, setCurrGrid] = useState(props.allGrids[selectedGrid])              // GRID
 
  // Set the data for the first time, and that's it. Filter the data separately (without refetching it).
  // const dataSet = dataSetMap[selectedGrid].apiDataSet
  // const dataSetGrid = dataSetMap[selectedGrid].grid
 
  // Send generalized dropdown objects from this parent component
  // const [dropdownSelection, setDropdownSelection] = useState({ value: rofoFilterTerms[0] })
 
  return (
    <>
      <h1>Shared Parent</h1>
      <TabsGridSelectionComponent
        tabsConfiguration={props}
        selectedGrid={selectedGrid}
        setSelectedGrid={setSelectedGrid} 
        currGrid={currGrid} 
        setCurrGrid={setCurrGrid} 
      />
    </>
  )
}
 
export default GridControlPanelTabShare
