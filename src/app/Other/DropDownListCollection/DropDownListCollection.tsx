import { DropDownList } from "@progress/kendo-react-dropdowns"

const DropDownListCollection = (props:any) => {

  const { selectedTab, controls } = props

  // console.log('controls', controls)

  return (
    <>
      {/* <h3>DropdownListCollection</h3> */}
      <Controls controls={controls} selectedTab={selectedTab} />
    </>
  )
}

export default DropDownListCollection

function Controls({ controls, selectedTab}) {

  const isControl = Array.isArray(controls.gridControls); // console.log('isControl', isControl)

  const handleDropdownSelection = (event:any) => {
    console.log('event', event.value)
    console.log('controls', controls)
  }

  return (
    <>
      {/* <h3>Controls (Component)</h3> */}
      {
        controls.gridControls.map((controlElement:any, index:number) => {
          // console.log('controlElement', controlElement)

          return (
            <div key={index}>
              {index}
              <DropDownList 
                data={controlElement.apiDropdownControls} 
                textField="text" 
                dataItemKey="id" 
                defaultValue={controlElement.apiDropdownDefaultValue}
                onChange={handleDropdownSelection}
              />
            </div>
          )
        })
      }
    </>
  )
  
}
