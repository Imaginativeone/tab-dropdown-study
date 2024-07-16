"use client";

import { useState, useEffect } from "react";
import TabsGridSelectionComponent from "../TabsGridSelectionComponent/TabsGridSelectionComponent";
import GridControlPanel from "../GridControlPanel/GridControlPanel";
import useFetchControlSet from "./localHooks/useFetchControlSet";

const GridControlPanelTabShare = (props: any) => {
  // This component handles the TabsGridSelection to GridControlPanel events

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedGrid, setSelectedGrid] = useState<number>(0);
  const [currGrid, setCurrGrid] = useState(props.allGrids[selectedGrid]); // GRID
  const { controls, setControls } = useFetchControlSet(selectedTab);

  useEffect(() => {
    setControls(selectedTab);
  }, []); //a useEffect ensures that this function is tied to proper mounting state of the component, but an empty dependency array ensures it only runs on first render
  // console.log('controls', controls)

  return (
    <>
      <h1>Shared Parent</h1>
      <GridControlPanel
        tabsConfiguration={props}
        selectedGrid={selectedGrid}
        selectedTab={selectedTab}
        controls={controls}
      />
      <TabsGridSelectionComponent
        tabsConfiguration={props}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        currGrid={currGrid}
        setCurrGrid={setCurrGrid}
      />
    </>
  );
};

export default GridControlPanelTabShare;
