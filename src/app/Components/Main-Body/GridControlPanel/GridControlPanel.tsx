import { AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-react-layout"

import DropDownListCollection from "@/app/Other/DropDownListCollection/DropDownListCollection"
import "./GridControlPanel.css"

const GridControlPanel = (props:any) => {

  const { selectedTab, controls } = props
  const { allGrids } = props.tabsConfiguration

  console.log('controls', controls)

  return (
    <>
      {/* <h1>GridControlPanel</h1> */}
      <AppBar id="kGridControlPanel">
        <AppBarSpacer style={{ width: 45 }} />
        <AppBarSection>
          <h1 className="title">Grid Control Panel</h1>
        </AppBarSection>
        <AppBarSpacer style={{ width: 45 }} />
        <AppBarSection>
          <p>selectedTab: {selectedTab}</p>
        </AppBarSection>
        <AppBarSection>
          {allGrids[selectedTab].settingString}
        </AppBarSection>
        <AppBarSection>
          <AppBarSpacer style={{ width: 40 }} />
          Tenant Response Date is Empty
          <DropDownListCollection selectedTab={selectedTab} controls={controls} />
        </AppBarSection>
      </AppBar>
    </>
  )
}

export default GridControlPanel
