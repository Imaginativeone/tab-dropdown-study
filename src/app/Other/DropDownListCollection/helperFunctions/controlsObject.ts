export default function controlsObject(controls: any, ctrlArray: any, setCtrlArray: any, controlObject: any) {

  if (!controls.gridControls) { controls.gridControls = controlObject.gridControls }
  else {
    controls.gridControls.map((control, index) => {})
  }
}
