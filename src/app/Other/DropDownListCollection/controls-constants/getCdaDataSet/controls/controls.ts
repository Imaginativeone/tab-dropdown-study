// import { leasing_stat_filter_terms } from "../filters/LEASING_STAT_filterTerms"

const cdaControls = {
  message: 'CDA Grid Control Panel Controls',
  newProp: 'New Property',
  gridControls:
  [
    {
      apiDropdownName: "CDA - A",
      apiDropdownDefaultValue: { id: 1, text: 'CDA - Yes', filter: null, defaultValue:true },
      apiDropdownLabel: "Label A",
      apiDropdownControls: [
        { id: 1, text: 'CDA - Yes',    filter: null, defaultValue:true },
        { id: 2, text: 'CDA - No',     filter: null},
        { id: 3, text: 'CDA - Yes/No', filter: null},
      ]
    },
    // {
    //   apiDropdownName: "rofo - B",
    //   apiDropdownLabel: "Label B",
    //   apiDropdownControls: [
    //     { id: 1, text: 'A', filter: null },
    //     { id: 2, text: 'B', filter: null, defaultValue: true },
    //     { id: 3, text: 'C', filter: null },
    //   ]
    // },
  ]
}

export default cdaControls
