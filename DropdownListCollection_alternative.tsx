import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useEffect, useRef, useState } from "react";

const DropDownListCollection = (props: any) => { // Controls
  
  const { selectedTab, controls, liftableFilter, setLiftableFilter } = props;

  return (
    <>
      {/* <h3>DropdownListCollection</h3> */}
      {
        controls.gridControls.map((control: any, index: number) => {
          return (
            <div key={index}>
              {/* {index} */}
              <Control control={control} selectedTab={selectedTab} liftableFilter={liftableFilter} setLiftableFilter={setLiftableFilter} />
            </div>
          )
        })
      }
    </>
  );
};

export default DropDownListCollection;

function Control({ control, selectedTab, liftableFilter, setLiftableFilter }) {

  useEffect(() => { // Defined in and lifted to GridControlPanelTabShare
    console.log('liftedFilter', liftableFilter)
  }, [liftableFilter])

  const [selectedControl, setSelectedControl] = useState(control.apiDropdownDefaultValue)
  const filter = useRef()

  useEffect(() => {
    filter.current = control.apiDropdownDefaultValue.filter
    // console.log('filter', filter)
    // setLiftableFilter('B')
    setLiftableFilter(filter.current)
    // console.log('liftableFilter', liftableFilter)
  }, [])

  useEffect(() => { 
    setSelectedControl(control.apiDropdownDefaultValue)
    filter.current = control.apiDropdownDefaultValue.filter
    setLiftableFilter(filter.current)
    // console.log('filter', filter)
    // console.log('liftableFilter', liftableFilter)
  }, [selectedTab])

  const handleDropdownSelection = (event:any) => { 
    setSelectedControl(event.value)
    filter.current = event.value.filter

    console.log('filter.current', filter.current)
    console.log('event.value', event.value)
  }

  return (
    <>
      {/* <h3>Control (Component)</h3> */}
      <DropDownList 
        data={control.apiDropdownControls}
        textField="text"
        value={selectedControl}
        onChange={handleDropdownSelection}
      />
    </>
  );
}
