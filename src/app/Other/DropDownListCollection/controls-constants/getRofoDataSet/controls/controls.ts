import { rofo_rofr_filter_terms } from "../filters/ROFO_ROFR_filterTerms"

const rofoControls = {
  message: 'ROFO/ROFR Grid Control Panel Controls',
  newProp: 'New Property',
  gridControls:
  [
    {
      apiDropdownName: "rofo - A",
      apiDropdownDefaultValue: { id: 2, text: 'Rofo - No', filter: rofo_rofr_filter_terms[1] },
      apiDropdownLabel: "Label A",
      apiDropdownControls: [
        { id: 1, text: 'Rofo - Yes',    filter: rofo_rofr_filter_terms[0] },
        { id: 2, text: 'Rofo - No',     filter: rofo_rofr_filter_terms[1], defaultValue:true },
        { id: 3, text: 'Rofo - Yes/No', filter: rofo_rofr_filter_terms[2] },
      ]
    },
    {
      apiDropdownName: "rofo - B",
      apiDropdownDefaultValue: { id: 2, text: 'B', filter: null, defaultValue: true },
      apiDropdownLabel: "Label B",
      apiDropdownControls: [
        { id: 1, text: 'A', filter: null },
        { id: 2, text: 'B', filter: null, defaultValue: true },
        { id: 3, text: 'C', filter: null },
      ]
    },
  ]
}

export default rofoControls
