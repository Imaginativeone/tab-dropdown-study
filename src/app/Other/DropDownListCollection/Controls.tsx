const Controls = ({ controls }) => {

  return (
    <>
      <h1>Controls</h1>
      <ControlItems />
    </>
  )
}

export default Controls

// function Item({ controls, setControls,ctrlArray, setCtrlArray, ctrlArrayRef, selectedTab, selectedGrid, filters, setFilters, controlInitialSelections, name, isPacked }) {
//   if (isPacked) {
//     return null;
//   }
//   return <li className="item">{name}</li>;
// }

function ControlItems(controls:any) {
  if (Array.isArray(controls)) {
    return null;
  }
  return <h1>Hello</h1>
}
