const DropDownListCollection = (props:any) => {

  const { selectedTab, controls } = props

  // console.log('controls', controls)

  return (
    <>
      <h3>DropdownListCollection</h3>
      <Controls controls={controls} selectedTab={selectedTab} />
    </>
  )
}

export default DropDownListCollection

function Controls({ controls, selectedTab}) {

  const isControl = Array.isArray(controls.gridControls)

  console.log('isControl', isControl)

  return (
    <>
      <h3>Controls (Component)</h3>
    </>
  )
  
}
