import { AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-react-layout"

import "./GridControlPanel.css"

const GridControlPanel = (props:any) => {

  const { selectedGrid, dropdownSelection, setDropdownSelection } = props
  const { allGrids } = props.tabsConfiguration

  console.log('allGrids', allGrids)

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
          <p>selectedGrid: {selectedGrid}</p>
        </AppBarSection>
        <AppBarSection>
          {/* {allGrids[selectedGrid].settingString} | {dropdownSelection.value.text} */}
          {allGrids[selectedGrid].settingString}
        </AppBarSection>
        <AppBarSection>
          <AppBarSpacer style={{ width: 40 }} />
          Tenant Response Date is Empty
          {/* <DropDownListCollection
            data={rofoFilterTerms}
            dataItemKey="id"
            textField="text"
            value={dropdownSelection.value} defaultValue="Yes" onChange={handleDropdownSelection}
          /> */}
        </AppBarSection>
      </AppBar>
    </>
  )
}

export default GridControlPanel