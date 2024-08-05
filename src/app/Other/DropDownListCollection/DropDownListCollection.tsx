import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useEffect, useRef, useState } from "react";

const DropDownListCollection = (props: any) => { // Controls
  const { selectedTab, controls } = props;

  return (
    <>
      {/* <h3>DropdownListCollection</h3> */}
      {
        controls.gridControls.map((control: any, index: number) => {
          return (
            <div key={index}>
              {/* {index} */}
              <Control control={control} selectedTab={selectedTab} />
            </div>
          )
        })
      }
    </>
  );
};

export default DropDownListCollection

function Control({ control, selectedTab }) {

  const [selectedControl, setSelectedControl] = useState(control.apiDropdownDefaultValue)
  const [filter, setFilter] = useState(control.apiDropdownDefaultValue.filter)
  const dropdownRef = useRef()

  useEffect(() => {
    setFilter(control.apiDropdownDefaultValue.filter)
    dropdownRef.current = control.apiDropdownDefaultValue
  }, [])

  useEffect(() => { 
    setSelectedControl(control.apiDropdownDefaultValue)
    dropdownRef.current = control.apiDropdownDefaultValue
    console.log('dropdownRef', dropdownRef)
  }, [selectedTab])

  const handleDropdownSelection = (event:any) => { 
    setSelectedControl(event.value)
    console.log('handleDropdownSelection | event.value', event.value)
    dropdownRef.current = event.value
    console.log('dropdownRef', dropdownRef)
  }

  return (
    <>
      {/* <h3>Control (Component)</h3> */}
      <DropDownList 
        data={control.apiDropdownControls}
        textField="text"
        value={selectedControl}
        onChange={handleDropdownSelection}
        ref={dropdownRef}
      />
    </>
  );
}
