'use client'
 
import { useState, useEffect } from 'react'
import TabsGridSelectionComponent from "../TabsGridSelectionComponent/TabsGridSelectionComponent"
import GridControlPanel from '../GridControlPanel/GridControlPanel'
import useFetchControlSet from './localHooks/useFetchControlSet'
 
const GridControlPanelTabShare = (props: any) => { // This component handles the TabsGridSelection to GridControlPanel events
 
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedGrid, setSelectedGrid] = useState<number>(0)                         // These vars are for selecting the
  const [currGrid, setCurrGrid] = useState(props.allGrids[selectedGrid])              // GRID
 
  const { controls, setControls } = useFetchControlSet(selectedTab)

  // Set the data for the first time, and that's it. Filter the data separately (without refetching it).
  // const dataSet = dataSetMap[selectedGrid].apiDataSet
  // const dataSetGrid = dataSetMap[selectedGrid].grid
 
  // Send generalized dropdown objects from this parent component
  // const [dropdownSelection, setDropdownSelection] = useState({ value: rofoFilterTerms[0] })
 
  setControls(selectedTab)
  // console.log('controls', controls)

  return (
    <>
      <h1>Shared Parent</h1>
      <GridControlPanel tabsConfiguration={props} selectedGrid={selectedGrid} selectedTab={selectedTab} controls={controls} />
      <TabsGridSelectionComponent
        tabsConfiguration={props}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        currGrid={currGrid} 
        setCurrGrid={setCurrGrid} 
      />
    </>
  )
}
 
export default GridControlPanelTabShare
