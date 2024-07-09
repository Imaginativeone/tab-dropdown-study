import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useEffect, useState } from "react";

const DropDownListCollection = (props: any) => {
  const { selectedTab, controls } = props;

  // console.log('controls', controls)

  return (
    <>
      {/* <h3>DropdownListCollection</h3> */}
      <Controls controls={controls} selectedTab={selectedTab} />
    </>
  );
};

export default DropDownListCollection;

function Controls({ controls, selectedTab }) {
  const isControl = Array.isArray(controls.gridControls); // console.log('isControl', isControl)

  return (
    <>
      {/* <h3>Controls (Component)</h3> */}
      {controls.gridControls.map((controlElement: any, index: number) => {
        // console.log('controlElement', controlElement)

        const [value, setValue] = useState(null); //created state for value and send to kendo-dropdownlist

        const handleDropdownSelection = (event: any) => {
          console.log("event", event.value);
          console.log("controls", controls);
          setValue(event.value); //update value on change event
        };

        useEffect(() => {
          setValue(controlElement.apiDropdownDefaultValue);
        }, [selectedTab]); //anytime the state for selectedTab changes we want to reset the value to match the controlset's default

        return (
          <div key={index}>
            {index}
            <DropDownList
              data={controlElement.apiDropdownControls}
              value={value}
              textField="text"
              dataItemKey="id"
              defaultValue={controlElement.apiDropdownDefaultValue}
              onChange={handleDropdownSelection}
            />
          </div>
        );
      })}
    </>
  );
}
